import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AssetService } from 'src/app/_services/asset.service';
import { Checkout } from 'src/app/_models/checkout';
import { CheckoutService } from 'src/app/_services/checkout.service';
import { LibraryAsset } from 'src/app/_models/libraryAsset';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/_services/notification.service';
import { Photo } from 'src/app/_models/photo';
import { PhotoService } from 'src/app/_services/photo.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  displayedColumns = ['libraryCardId', 'until', 'status'];
  asset: LibraryAsset;
  checkouts: Checkout[];
  dataSource = new MatTableDataSource<Checkout>();
  constructor(
    private assetService: AssetService,
    private notify: NotificationService,
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(asset => {
      this.asset = asset.asset;
    });
    this.getCheckoutsForAsset();
    console.log(this.asset);
  }

  getCheckoutsForAsset() {
    this.checkoutService.getCheckoutsForAsset(this.asset.id).subscribe((checkouts: Checkout[]) => {
      this.checkouts = checkouts;
      this.dataSource.data = checkouts;
    }, error => {
      this.notify.error(error);
    });
  }

  editAssetModal(asset: LibraryAsset) {
  }

  onFileSelected(event) {
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   const fd = new FormData();
    //   fd.append('libraryAssetId', this.asset.id.toString());
    //   fd.append('file', file);
    //   this.photoService.changeAssetPhoto(fd).subscribe(
    //     (res: Photo) => {
    //       this.asset.photoUrl = res.url;
    //       this.alertify.success('Photo changed successfully');
    //     },
    //     error => {
    //       this.alertify.error(error);
    //     }
    //   );
    // }
    // this.myInputVariable.nativeElement.value = '';
  }


}
