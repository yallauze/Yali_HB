import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlauneComponent } from './components/alaune/alaune.component';
import { VielocalComponent } from './components/vielocal/vielocal.component';
import { SportsComponent } from './components/sports/sports.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch:'full'},
  { path: 'home1', component: DashboardComponent},
  { path: 'alaune', component: AlauneComponent},
  { path: 'vielocal', component: VielocalComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'loisirs', component: LoisirsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/article/add', component: AddArticleComponent},
  { path: 'admin/article/edit/:id', component: EditArticleComponent},
  { path: 'cityArticle/:id', component: FullArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
