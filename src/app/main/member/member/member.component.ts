import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { State } from 'src/app/_models/state';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/_services/notification.service';
import { MemberService } from 'src/app/_services/member.service';
import { StateService } from 'src/app/_services/state.service';
import { Observable } from 'rxjs/internal/Observable';
import { startWith, map } from 'rxjs/operators';
import { stateValidator } from 'src/app/shared/validators/state.validator';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  stateControl = new FormControl('', Validators.compose([Validators.required, stateValidator]));
  memberForm: FormGroup;
  member: User;
  showRevert = false;
  options: string[] = this.stateService.getStates();
  filteredStates$: Observable<string[]>;

  validationMessages = {
    firstName: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name cannot be more than 25 characters' },
    ],
    lastName: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name cannot be more than 25 characters' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid Email' },
    ],
    phoneNumber: [
      { type: 'required', message: 'Phone Number is required' },
    ],
    address: [
      { type: 'required', message: 'Address is required' },
      { type: 'maxlength', message: 'Address cannot be more than 100 characters' },
    ],
    state: [
      { type: 'required', message: 'State is required' },
      { type: 'stateValidator', message: 'Please select a valid state' },
    ],
    stateControl: [
      { type: 'required', message: 'State is required' },
      { type: 'stateValidator', message: 'Please select a valid state' },
    ],
    city: [
      { type: 'required', message: 'City is required' },
    ],
    zipcode: [
      { type: 'required', message: 'Zipcode is required' },
      { type: 'pattern', message: 'Please enter a valid Zipcode' },
    ],
    gender: [
      { type: 'required', message: 'Gender is required' },
    ],
  };

  constructor(private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<MemberComponent>,
              private dialog: MatDialog,
              private stateService: StateService,
              public notify: NotificationService,
              private memberService: MemberService) { }

  ngOnInit() {
    this.createMemberForm();
    this.filteredStates$ = this.stateControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterStates(value))
      );
    this.isUpdate();
  }

  updateState(value: any) {
    this.memberForm.markAsDirty();
    this.memberForm.controls.state.setValue(value.source.value);
  }

  private _filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  isUpdate() {
    if (this.data) {
      this.populateForm(this.data);
      this.member = this.data;
      this.showRevert = true;
    } else {
      this.createMemberForm();
    }
  }

  revert() {
    this.populateForm(this.member);
  }

  populateForm(member: User) {
    this.memberForm = this.fb.group({
      id: new FormControl(member.id),
      firstName: new FormControl(member.firstName, Validators.compose([Validators.required, Validators.maxLength(25)])),
      lastName: new FormControl(member.lastName, Validators.compose([Validators.required, Validators.maxLength(25)])),
      email: new FormControl(member.email, Validators.compose([Validators.required, Validators.email])),
      phoneNumber: new FormControl(member.phoneNumber, Validators.compose([Validators.required])),
      address: new FormControl(member.address, Validators.compose([Validators.required, Validators.maxLength(100)])),
      state: new FormControl(member.state, Validators.compose([Validators.required, stateValidator])),
      city: new FormControl(member.city, Validators.compose([Validators.required])),
      zipcode: new FormControl(member.zipcode, Validators.compose([Validators.required, Validators.pattern('^[0-9]{5}$')])),
      gender: new FormControl(member.gender, Validators.required),
    });
    this.stateControl.setValue(member.state);
  }

  displayFn(state?: State) {
    return state ? state.name : undefined;
  }

  closeDialog() {
    if (this.memberForm.dirty) {
      this.notify.discardDialog('Are you sure you want to');
    } else {
      this.dialog.closeAll();
    }
  }

  createMemberForm() {
    this.memberForm = this.fb.group({
      id: new FormControl(null),
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(25)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(25)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      phoneNumber: new FormControl('', Validators.compose([Validators.required])),
      address: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
      state: new FormControl('', Validators.compose([Validators.required, stateValidator])),
      city: new FormControl('', Validators.compose([Validators.required])),
      zipcode: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{5}$')])),
      gender: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.memberForm.valid) {
      if (this.memberForm.controls.id.value) {
        this.updateMember(this.memberForm.value);
      } else {
        this.addMember(this.memberForm.value);
      }
    }
    this.onClose();
  }

  addMember(member: User) {
    this.memberService.AddMember(member).subscribe((createdMember: User) => {
      this.notify.success('Item Added Successfully');
      member = createdMember;
    },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/members', member.id]);
      }
    );
  }

  updateMember(member: User) {
    this.memberService.updateMember(member).subscribe(
      () => {
        this.notify.success('Updated Successful');
      },
      error => {
        this.notify.error(error);
      },
      () => {
        this.router.navigate(['/members', member.id]);
      }
    );
  }

  onClose() {
    this.dialog.closeAll();
    this.memberForm.reset();
  }
}
