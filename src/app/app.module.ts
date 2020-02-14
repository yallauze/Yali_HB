/* chaque generation de component est mise à jour dans app module automatiquement */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { FirstCharPipePipe } from './pipes/first-char-pipe.pipe';
import { AlauneComponent } from './components/alaune/alaune.component';
import { VielocalComponent } from './components/vielocal/vielocal.component';
import { SportsComponent } from './components/sports/sports.component';
import { LoisirsComponent } from './components/loisirs/loisirs.component';
import { AdminComponent } from './components/admin/admin.component';
import { FullArticleComponent } from './components/full-article/full-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DetailArticleComponent,
    FirstCharPipePipe,
    AlauneComponent,
    VielocalComponent,
    SportsComponent,
    LoisirsComponent,
    AdminComponent,
    FullArticleComponent,
    AddArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
