import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-vielocal',
  templateUrl: './vielocal.component.html',
  styleUrls: ['./vielocal.component.css']
})
export class VielocalComponent implements OnInit {

  public vielocalArticles: Article[];
  public isLoading: boolean;
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getCityArticlesByCat("vielocal").subscribe(
      (data: Article[]) => {
        this.vielocalArticles = data;
      }
    );
  }

}
