import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public categories: string[] = ['alaune', 'vielocal', 'sport', 'loisir'];

  public cityArticle: Article;
  public cityArticles: Article[];
  public _url: string = "http://localhost:3000/article";

  constructor(private _httpClient: HttpClient) { }

  getCityArticles(): Observable<Article[]> { // Get articles via httpClient
    let cityArticles: Observable<Article[]>;
    cityArticles = this._httpClient.get<Article[]>(this._url).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    return cityArticles;
  }

  getCityArticlesById(_id: number): Observable<Article> { // Get articles via httpClient
    let cityArticleById: Observable<Article>;
    cityArticleById = this._httpClient.get<Article>(`${this._url}/${_id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    return cityArticleById;
  }

  getCityArticlesByCat(_cat: string): Observable<Article[]> { // Get articles via httpClient
    let cityArticlesByCat: Observable<Article[]>;
    cityArticlesByCat = this._httpClient.get<Article[]>(`${this._url}?category=${_cat}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    return cityArticlesByCat;
  }

  errorHandler(_error: HttpErrorResponse) { // in case my http gets an error
    console.log(_error);
    let errorMessage = '';
    if (_error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = _error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${_error.status}\nMessage: ${_error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  add(_article: Article): Observable<Article> {
    return this._httpClient.post<Article>(this._url, _article).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateEditedArticle(_editedArticle: Article) {
    return this._httpClient.put<Article>(`${this._url}/${_editedArticle.id}`, _editedArticle).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteA(_deleteArticle: Article): Observable<Article> {
    return this._httpClient.delete<Article>(`${this._url}/${_deleteArticle.id}`).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    /* let deleteIndex = this.cityArticles.indexOf(this.cityArticles.filter((p) => p.id === deleteArticle.id)[0] = deleteArticle);
    this.cityArticles.splice(deleteIndex, 1); */
  }


  getCategories() {
    return this.categories;
  }

}

