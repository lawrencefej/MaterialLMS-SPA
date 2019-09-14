import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

import { AddAssetComponent } from '../add-asset/add-asset.component';
import { AssetService } from 'src/app/_services/asset.service';
import { AuthService } from 'src/app/_services/auth.service';
import { LibraryAsset } from 'src/app/_models/libraryAsset';
import { MatDialog } from '@angular/material/dialog';
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
    private router: Router,
    private authService: AuthService,
    private notify: NotificationService,
    public dialog: MatDialog
  ) {}
  assets: LibraryAsset[];
  selectedItemPerPage: any;
  pagination: Pagination;
  count: number;
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

  public redirectToDetails = () => {
    console.log('details');
  }

  public redirectToUpdate = () => {
    console.log('update');
  }

  public redirectToDelete = () => {
    console.log('delete');
    this.deleteAsset();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddAssetComponent, {
      width: '640px', disableClose: true
    });
  }

  // editAssetModal(asset: LibraryAsset) {
  //   const initialState = {
  //     asset
  //   };
  //   this.bsModalRef = this.modalService.show(AddAssetComponent, {
  //     initialState
  //   });
  //   this.bsModalRef.content.updatedAsset.subscribe((value: LibraryAsset) => {
  //     this.updateAsset(value);
  //   });
  // }

  // addAssetModal() {
  //   this.bsModalRef = this.modalService.show(AddAssetComponent);
  //   this.bsModalRef.content.addedAsset.subscribe((value: LibraryAsset) => {
  //     this.addAsset(value);
  //   });
  // }

  addAsset(asset: LibraryAsset) {
    this.assetService.addAuthor(asset).subscribe(
      (libraryAsset: LibraryAsset) => {
        this.notify.success('Item Added Successfully');
        this.assets.unshift(libraryAsset);
        asset = libraryAsset;
      },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/catalog', asset.id]);
      }
    );
  }

  updateAsset(asset: LibraryAsset) {
    this.assetService
      .updateAsset(this.authService.decodedToken.nameid, asset)
      .subscribe(
        () => {
          this.notify.success('Updated Successful');
          const item = this.assets.find(a => a.id === asset.id);
          const index = this.assets.indexOf(item);
          this.assets[index] = asset;
        },
        error => {
          this.notify.error(error);
        }
      );
  }

  deleteAsset() {
    this.notify
      .confirm('test')
      .afterClosed()
      .subscribe(res => {
        console.log(res);
      });
  }

  // deleteAsset(asset: LibraryAsset) {
  //   this.alertify.confirm(
  //     'Are you sure you want to delete ' + asset.title + '?',
  //     () => {
  //       this.assetService.deleteAsset(asset.id).subscribe(
  //         () => {
  //           this.assets.splice(
  //             this.assets.findIndex(u => u.id === asset.id),
  //             1
  //           );
  //           this.alertify.success(asset.title + ' was deleted successfully');
  //         },
  //         error => {
  //           this.alertify.error(error);
  //         }
  //       );
  //     }
  //   );
  // }

  // getAsset(id: any) {
  //   this.assetService.getAsset(id).subscribe(
  //     (asset: LibraryAsset) => {
  //       this.editAssetModal(asset);
  //     },
  //     error => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }

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
    this.searchString = '';
  }
}
