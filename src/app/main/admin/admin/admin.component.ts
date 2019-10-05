import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { User } from 'src/app/_models/user';
import { NotificationService } from 'src/app/_services/notification.service';
import { Role } from 'src/app/_models/role';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  validationMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' },
      {
        type: 'maxlength',
        message: 'First Name cannot be more than 25 characters'
      }
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' },
      {
        type: 'maxlength',
        message: 'Last Name cannot be more than 25 characters'
      }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid Email' }
    ],
    role: [
      { type: 'required', message: 'Role is required' },
      { type: 'required', message: 'Please select a valid role' }
    ]
  };

  roles: Role[] = [{ id: 1, name: 'Librarian' }, { id: 2, name: 'Admin' }];

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AdminComponent>,
    private dialog: MatDialog,
    public notify: NotificationService,
    private adminService: AdminService
  ) {}

  ngOnInit() {}

  createUserForm() {
    this.userForm = this.fb.group({
      id: new FormControl(null),
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(25)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(25)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      role: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  populateForm(user: User) {
    this.userForm = this.fb.group({
      id: new FormControl(user.id),
      firstName: new FormControl(user.firstName, Validators.compose([Validators.required, Validators.maxLength(25)])),
      lastName: new FormControl(user.lastName, Validators.compose([Validators.required, Validators.maxLength(25)])),
      email: new FormControl(user.email, Validators.compose([Validators.required, Validators.email])),
      role: new FormControl(user.phoneNumber, Validators.compose([Validators.required])),
    });
  }

  isUpdate() {
    if (this.data) {
      this.populateForm(this.data);
      this.user = this.data;
      // this.showRevert = true;
    } else {
      this.createUserForm();
    }
  }

  revert() {
    this.populateForm(this.user);
  }

  closeDialog() {
    if (this.userForm.dirty) {
      this.notify.discardDialog('Are you sure you want to');
    } else {
      this.dialog.closeAll();
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.controls.id.value) {
        this.updateMember(this.userForm.value);
      } else {
        this.addUser(this.userForm.value);
      }
    }
    this.onClose();
  }

  addUser(user: User) {
    this.adminService.addUser(user).subscribe((createdMember: User) => {
      this.notify.success('Item Added Successfully');
      user = createdMember;
    },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/members', user.id]);
      }
    );
  }

  updateMember(user: User) {
    this.adminService.updateUser(user).subscribe(
      () => {
        this.notify.success('Updated Successful');
      },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/members', user.id]);
      }
    );
  }

  onClose() {
    this.dialog.closeAll();
    this.userForm.reset();
  }
}
