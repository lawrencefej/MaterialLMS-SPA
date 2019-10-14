import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortclose-nav',
  templateUrl: './shortclose-nav.component.html',
  styleUrls: ['./shortclose-nav.component.css']
})
export class ShortcloseNavComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;

  task: string[] = [
    'Clearning out my closet',
    'Take out trash bins',
    'Wash car',
    'Tank up the motorcycles',
    'Go for flight training'
  ];

  constructor() {}

  ngOnInit() {}

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
