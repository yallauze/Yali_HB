import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {

  public id: number
  public cityArticle: Article;
  public isLoading: boolean;
  constructor(private _activatedRoute: ActivatedRoute, private _articleService: ArticleService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
    this._articleService.getCityArticlesById(this.id).subscribe(
      (data: Article) => {
        this.cityArticle = data;
        this.isLoading = false;
      }
    );
  }

}
