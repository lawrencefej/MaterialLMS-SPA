/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreventUnsavedComponent } from './prevent-unsaved.component';

describe('PreventUnsavedComponent', () => {
  let component: PreventUnsavedComponent;
  let fixture: ComponentFixture<PreventUnsavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventUnsavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventUnsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
