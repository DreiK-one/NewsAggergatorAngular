import { ArticlesService } from './../../services/articles-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  article? : Article;
  img?: string;

  constructor(private route: ActivatedRoute,
    private location : Location,
    private articleService : ArticlesService) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(id)
      .subscribe(art => {
        this.article = art;
        let trimed: string[] = this.article!.image.split("'");
        this.img = trimed[1];
      });
  }

  

  goBack(): void{
    this.location.back();
  }
}
