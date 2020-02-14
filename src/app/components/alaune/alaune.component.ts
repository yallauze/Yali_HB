import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-alaune',
  templateUrl: './alaune.component.html',
  styleUrls: ['./alaune.component.css']
})
export class AlauneComponent implements OnInit {

  public alauneArticles: Article[] = [];
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    this._articleService.getCityArticlesByCat("alaune").subscribe(
      (data: Article[]) => {
        this.alauneArticles = data;
      }
    );
  }
}
