import { MessagesService } from './../../services/messages.service';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-article_preview',
  templateUrl: './article_preview.component.html',
  styleUrls: ['./article_preview.component.scss']
})
export class Article_previewComponent implements OnInit {

  @Input() article? : Article

  // selectedArticle? : Article;

  // article : Article = {
  //   id: '1',
  //   title: 'First news',
  //   description: "it's a first news",
  //   body: '123123123 123123 1412412 3123123123 123',
  //   creationDate: '04.05.2022',
  //   image: 'url: 123123123'
  // };
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }
  // onSelect(article : Article){
  //   this.selectedArticle = article;
  // }

  onClick(article : Article){
    this.messagesService.add(`Selected article id=${article.id}`);
  }
}
