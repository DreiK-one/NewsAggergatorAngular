import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Article_listComponent } from './article_list/article_list.component';
import { Article_previewComponent } from './article_preview/article_preview.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
      Article_listComponent,
      Article_previewComponent,
      ArticleDetailsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
