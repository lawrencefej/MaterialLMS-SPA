import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AssetType } from 'src/app/_models/assetType';
import { Author } from 'src/app/_models/author';
import { Category } from 'src/app/_models/category';
import { LibraryAsset } from 'src/app/_models/libraryAsset';
import { PaginatedResult } from 'src/app/_models/pagination';
import { AssetTypeService } from 'src/app/_services/asset-type.service';
import { AssetService } from 'src/app/_services/asset.service';
import { AuthorService } from 'src/app/_services/author.service';
import { CategoryService } from 'src/app/_services/category.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit, OnDestroy {
  categories: Category[];
  assetTypes: AssetType[];
  authors: Author[];

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: LibraryAsset,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddAssetComponent>,
    private dialog: MatDialog,
    private authorService: AuthorService,
    private assetService: AssetService,
    public notify: NotificationService,
    private assetTypeService: AssetTypeService,
    private categoryService: CategoryService
  ) {}

  loginForm: FormGroup;
  assetForm: FormGroup;
  asset: LibraryAsset;
  selectedAssetType: AssetType;
  selectedCategory: Category;
  selectedAuthor: Author;
  showRevert = false;

  ngOnInit() {
    this.getAuthors();
    this.getAssetTypes();
    this.getCategories();
    this.isUpdate();
  }

  ngOnDestroy() {}

  isUpdate() {
    if (this.data) {
      this.populateForm(this.data);
      this.asset = this.data;
      this.showRevert = true;
    } else {
      this.createAssetForm();
    }
  }

  revert() {
    this.populateForm(this.asset);
  }

  populateForm(asset: LibraryAsset) {
    this.assetForm = this.fb.group({
      id: new FormControl(asset.id),
      title: new FormControl(
        asset.title,
        Validators.compose([Validators.required])
      ),
      author: new FormControl(
        asset.authorName,
        Validators.compose([Validators.required])
      ),
      year: new FormControl(
        asset.year,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ])
      ),
      numberOfCopies: new FormControl(
        asset.numberOfCopies,
        Validators.required
      ),
      copiesAvailable: new FormControl(
        asset.copiesAvailable,
        Validators.required
      ),
      description: new FormControl(
        asset.description,
        Validators.compose([Validators.required])
      ),
      category: new FormControl(asset.category, Validators.required),
      assetType: new FormControl(this.selectedAssetType, Validators.required),
      assetTypeId: new FormControl(''),
      categoryId: new FormControl(''),
      authorId: new FormControl(''),
      isbn: new FormControl(
        { value: asset.isbn, disabled: true },
        Validators.required
      )
    });
  }

  getAuthors() {
    this.authorService.getPaginatedAuthors().subscribe(
      (res: PaginatedResult<Author[]>) => {
        this.authors = res.result;
        if (this.data) {
          this.selectedAuthor = res.result.find(
            x => x.id === this.data.authorId
          );
          this.assetForm.controls.author.setValue(this.selectedAuthor);
        }
      },
      error => {
        this.notify.error(error);
      }
    );
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        if (this.data) {
          this.selectedCategory = categories.find(
            x => x.id === this.data.categoryId
          );
          this.assetForm.controls.category.setValue(this.selectedCategory);
        }
      },
      error => {
        this.notify.error(error);
      }
    );
  }

  getAssetTypes() {
    this.assetTypeService.getCategories().subscribe(
      (assetTypes: AssetType[]) => {
        this.assetTypes = assetTypes;
        if (this.data) {
          this.selectedAssetType = assetTypes.find(
            x => x.id === this.data.assetTypeId
          );
          this.assetForm.controls.assetType.setValue(this.selectedAssetType);
          if (this.selectedAssetType.name === 'Book') {
            this.assetForm.controls.isbn.enable();
          }
        }
      },
      error => {
        this.notify.error(error);
      }
    );
  }

  onItemChange(value: any) {
    if (value.id !== null) {
      if (Number(value.id) === this.getBookId()) {
        this.assetForm.controls.isbn.enable();
      } else {
        this.assetForm.controls.isbn.reset();
        this.assetForm.controls.isbn.disable();
      }
    }
  }

  getBookId() {
    let assetTypeId: AssetType;
    assetTypeId = this.assetTypes.find(x => x.name === 'Book');
    return assetTypeId.id;
  }

  displayFn(author: Author) {
    return author ? author.fullName : undefined;
  }

  closeDialog() {
    if (this.assetForm.dirty) {
      this.notify.discardDialog('Are you sure you want to');
    } else {
      this.dialog.closeAll();
    }
  }

  createAssetForm() {
    this.assetForm = this.fb.group({
      id: new FormControl(null),
      title: new FormControl('', Validators.compose([Validators.required])),
      author: new FormControl('', Validators.compose([Validators.required])),
      year: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ])
      ),
      numberOfCopies: new FormControl('', Validators.required),
      description: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      category: new FormControl('', Validators.required),
      assetType: new FormControl('', Validators.required),
      isbn: new FormControl({ value: '', disabled: true }, Validators.required)
    });
  }

  onSubmit() {
    let asset: LibraryAsset;
    asset = this.mapId(asset);
    if (this.assetForm.valid) {
      if (this.assetForm.controls.id.value) {
        this.updateAsset(asset);
      } else {
        this.addAsset(asset);
      }
    }
    this.onClose();
  }

  private mapId(asset: LibraryAsset) {
    asset = this.assetForm.value as LibraryAsset;
    asset.authorId = asset.author.id;
    asset.assetTypeId = asset.assetType.id;
    asset.categoryId = asset.category.id;
    return asset;
  }

  addAsset(asset: LibraryAsset) {
    this.assetService.addAsset(asset).subscribe(
      (libraryAsset: LibraryAsset) => {
        this.notify.success('Item Added Successfully');
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
    this.assetService.updateAsset(asset).subscribe(
      () => {
        this.notify.success('Updated Successful');
      },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/catalog', asset.id]);
      }
    );
  }

  onClose() {
    this.dialog.closeAll();
    this.assetForm.reset();
  }
}
