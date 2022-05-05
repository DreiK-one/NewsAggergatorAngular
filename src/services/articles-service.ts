import { ApiService } from './api.service';
import { ARTICLE_COLLECTION } from '../models/article_collection';
import { Injectable } from '@angular/core';
import { Article } from 'src/models/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private apiService : ApiService) { }

  getArticles(): Observable<Article[]>{
    return this.apiService.get('Articles').pipe();
  }

  // getArticle(id: string): Observable<Article>{
  //   const article = ARTICLE_COLLECTION.find(a => a.id === id)!;
  //   return of(article);
  // }
}
