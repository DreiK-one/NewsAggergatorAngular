import { ArticlesService } from './../../services/articles-service';
import { Article } from 'src/models/article';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article_list',
  templateUrl: './article_list.component.html',
  styleUrls: ['./article_list.component.scss']
})
export class Article_listComponent implements OnInit {

  articles: Article[] = [];
  page!: number;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
      this.page = 1;
      this.articleService.getArticlesByPage(this.page)
        .subscribe(articles => this.articles = articles); 
  }

  getMoreArticles(){
    this.page++;
    this.articleService.getArticlesByPage(this.page)
      .subscribe(articles => this.articles.push(...articles));
    
  }
}
