import { ArticlesService } from './../../services/articles-service';
import { Article } from 'src/models/article';
import { ARTICLE_COLLECTION } from './../../models/article_collection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article_list',
  templateUrl: './article_list.component.html',
  styleUrls: ['./article_list.component.scss']
})
export class Article_listComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);


  }
}
