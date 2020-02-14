import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.css']
})
export class LoisirsComponent implements OnInit {

  public loisirArticles: Article[];
  constructor(private _articleService: ArticleService) { }

  ngOnInit() {
    /* this.loisirArticles = this._articleService.getCityArticles().filter(p => p.category === "loisir");
    console.table(this.loisirArticles); */
  }

}
