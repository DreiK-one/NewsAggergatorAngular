/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Article_previewComponent } from './article_preview.component';

describe('Article_previewComponent', () => {
  let component: Article_previewComponent;
  let fixture: ComponentFixture<Article_previewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Article_previewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Article_previewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
