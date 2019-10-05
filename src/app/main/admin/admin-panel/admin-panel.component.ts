import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { AdminComponent } from '../admin/admin.component';
import { AdminService } from 'src/app/_services/admin.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  users: User[];
  dataSource = new MatTableDataSource<User>(this.users);
  displayedColumns = ['firstName', 'lastName', 'email', 'role', 'actions'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private adminService: AdminService, private notify: NotificationService,
              public dialog: MatDialog, ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getAdmins().subscribe((users => {
      this.users = users;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }), error => {
      this.notify.error(error);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddAssetDialog() {
    this.dialog.open(AdminComponent, {
      width: '640px',
      disableClose: true
    });
  }

  public updateAsset(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '640px';
    dialogConfig.data = element;
    this.dialog.open(AdminComponent, dialogConfig);
  }

}
