import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Article_listComponent } from './article_list/article_list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: Article_listComponent},
  {path:'article/:id', component: ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
