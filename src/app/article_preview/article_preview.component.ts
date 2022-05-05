import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-article_preview',
  templateUrl: './article_preview.component.html',
  styleUrls: ['./article_preview.component.scss']
})
export class Article_previewComponent implements OnInit {

  @Input() article? : Article

  constructor() { }

  ngOnInit() {
  }
}
