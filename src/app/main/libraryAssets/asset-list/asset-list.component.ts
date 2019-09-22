import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

import { ActivatedRoute } from '@angular/router';
import { AddAssetComponent } from '../add-asset/add-asset.component';
import { AssetService } from 'src/app/_services/asset.service';
import { LibraryAsset } from 'src/app/_models/libraryAsset';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NotificationService } from 'src/app/_services/notification.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements AfterViewInit, OnInit {
  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute,
    private notify: NotificationService,
    public dialog: MatDialog
  ) {}
  assets: LibraryAsset[];
  selectedItemPerPage: any;
  pagination: Pagination;
  dataSource = new MatTableDataSource<LibraryAsset>();
  searchString = '';
  displayedColumns = ['title', 'authorName', 'year', 'assetType', 'actions'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<LibraryAsset>;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pagination = data.assets.pagination;
      this.dataSource.data = data.assets.result as LibraryAsset[];
    });
  }

  ngAfterViewInit() {
    merge(this.paginator.page, this.sort.sortChange).subscribe(() => {
      this.loadData();
    });
  }

  searchAssets(value: string) {
    this.assetService.searchAsset(value).subscribe(
      (assets: LibraryAsset[]) => {
        this.assets = assets;
      },
      error => {
        this.notify.error(error);
      }
    );
  }

  filterList() {
    this.searchString.trim().toLocaleLowerCase();
    this.loadData();
  }

  onSearchClear() {
    this.searchString = '';
    this.filterList();
  }

  public updateAsset(element: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '640px';
    dialogConfig.data = element;
    this.dialog.open(AddAssetComponent, dialogConfig);
  }

  openAddAssetDialog() {
    this.dialog.open(AddAssetComponent, {
      width: '640px',
      disableClose: true
    });
  }

  deleteAsset(asset: LibraryAsset) {
    this.notify
      .confirm(
        'Are you sure you sure you want to delete this ' +
          asset.assetType +
          ': "' +
          asset.title +
          '"'
      )
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.assetService.deleteAsset(asset.id).subscribe(
            () => {
              this.dataSource.data.splice(
                this.dataSource.data.findIndex(x => x.id === asset.id),
                1
              );
              this.notify.warn(asset.title + ' was deleted successfully');
              this.paginator.pageIndex = 0;
              this.loadData();
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
    this.assetService
      .getPaginatedAssets(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        this.sort.active,
        this.sort.direction.toString(),
        this.searchString
      )
      .subscribe(
        (res: PaginatedResult<LibraryAsset[]>) => {
          this.dataSource.data = res.result as LibraryAsset[];
        },
        error => {
          this.notify.error(error);
        }
      );
  }
}
