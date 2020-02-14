import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  public isNaN: boolean = false;
  public newArticle: Article;
  public categories: string[];
  constructor(private _articleService: ArticleService, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.newArticle = new Article(null, '', '', '', '');
    this.categories = this._articleService.getCategories();
  }

  checkIfNumber($event: any) {
    if ($event.charCode > 57 || $event.charCode < 48) {
      this.isNaN = true;
    } else {
      this.isNaN = false;
    }
  }

  onSubmit() {
    this._articleService.add(this.newArticle).subscribe(
      (data: Article) => {
        this._router.navigate(['/admin']);
        this._toastrService.success('Submitted!!');
      }
    );
  }

}
