import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  public articles: Article[];
  public isLoading: boolean;
  constructor(private _articleService: ArticleService, private _router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this._articleService.getCityArticles().subscribe(
      (data: Article[]) => {
        this.articles = data;
        this.isLoading = false;
      }
    );
  }

  toAdd() {
    this._router.navigate(['/admin/article/add']);
  }

  deleteArticle(p_article: Article) {
    this.isLoading = true;
    this._articleService.deleteA(p_article).subscribe( data => {
      // get all the articles again because database deleted
      this._articleService.getCityArticles().subscribe( data => {
        this.articles = data;
        this.isLoading = false;
      }

      );
    }

    );

    this._articleService.deleteA(p_article);
    console.log(p_article);
  }

}