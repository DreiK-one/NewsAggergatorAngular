/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Article_listComponent } from './article_list.component';

describe('Article_listComponent', () => {
  let component: Article_listComponent;
  let fixture: ComponentFixture<Article_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
