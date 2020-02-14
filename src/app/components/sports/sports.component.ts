import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  public sportArticles: Article[];
  public isLoading: boolean;
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getCityArticlesByCat("sport").subscribe(
      (data: Article[]) => {
        this.sportArticles = data;
      }
    );
  }

}
