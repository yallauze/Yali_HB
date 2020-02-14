import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  public id: number;
  public categories: string[];
  public editArticle: Article = new Article(null, '', '', '', '');
  public isLoading: boolean;
  constructor(private _articleService: ArticleService, private _activatedRoute: ActivatedRoute, private _router: Router, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._articleService.getCityArticlesById(this.id).subscribe(data => {
      this.editArticle = data,
      this.isLoading = false
    });
    this.categories = this._articleService.getCategories();
  }

  onConfirmEdit() {
    this._articleService.updateEditedArticle(this.editArticle).subscribe(
      data => {
        this._router.navigate(['/admin']);
        this._toastrService.success('Modification is well Submitted!!');
      }
    );

  }




}
