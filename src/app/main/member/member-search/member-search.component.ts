import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MemberComponent } from '../member/member.component';
import { MemberService } from 'src/app/_services/member.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {
  searchString = '';
  member: User;

  constructor(
    private memberService: MemberService,
    private notify: NotificationService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {}

  searchMember() {
    this.memberService.getMemberByCardNumber(Number(this.searchString)).subscribe((member: User) => {
      if (member != null) {
        this.member = member;
        this.searchString = '';
        return;
      }
      this.notify.error('This card does not exist');
    }, error => {
      this.notify.error(error);
    });
  }

  openMemberDialog() {
    this.dialog.open(MemberComponent, {
      width: '640px',
      disableClose: true
    });
  }

  selectMember() {
    this.router.navigate(['/members/', this.member.id]);
  }

  fullList() {
    this.router.navigate(['/members']);
  }
}
