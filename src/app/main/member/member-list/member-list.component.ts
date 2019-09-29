import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

import { ActivatedRoute } from '@angular/router';
import { MemberComponent } from '../member/member.component';
import { MemberService } from 'src/app/_services/member.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { User } from 'src/app/_models/user';
import { merge } from 'rxjs/internal/observable/merge';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements AfterViewInit, OnInit {
  members: User[];
  selectedItemPerPage: any;
  pagination: Pagination;
  dataSource = new MatTableDataSource<User>(this.members);
  searchString = '';
  displayedColumns = [
    'libraryCardNumber',
    'firstName',
    'lastName',
    'email',
    'actions'
  ];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
    private notify: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pagination = data.members.pagination;
      this.members = data.members.result;
      this.dataSource = new MatTableDataSource<User>(this.members);
    });
  }

  ngAfterViewInit() {
    merge(this.paginator.page, this.sort.sortChange).subscribe(() => {
      this.loadData();
    });
  }

  filterList() {
    this.searchString.trim().toLocaleLowerCase();
    this.loadData();
  }

  onSearchClear() {
    this.searchString = '';
    this.filterList();
  }

  public updateMember(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '640px';
    dialogConfig.data = element;
    this.dialog.open(MemberComponent, dialogConfig);
  }

  openMemberEditDialog() {
    this.dialog.open(MemberComponent, {
      width: '640px',
      disableClose: true
    });
  }

  deleteAsset(member: User) {
    this.notify
      .confirm('Are you sure you sure you want to delete this member')
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.memberService.deleteMember(member.id).subscribe(
            () => {
              this.members.splice(this.members.findIndex(x => x.id === member.id),  1);
              this.notify.warn(member.libraryCardNumber + ' was deleted successfully');
              this.pagination.totalItems--;
              this.dataSource = new MatTableDataSource<User>(this.members);
            },
            error => {
              this.notify.error(error);
            }
          );
        }
      });
  }

  loadData() {
    this.pagination.itemsPerPage = this.selectedItemPerPage;
    this.memberService
      .getPaginatedMembers(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction.toString(),
        this.searchString
      )
      .subscribe((res: PaginatedResult<User[]>) => {
          this.members = res.result;
          this.dataSource = new MatTableDataSource<User>(this.members);
        },
        error => {
          this.notify.error(error);
        }
      );
  }
}
