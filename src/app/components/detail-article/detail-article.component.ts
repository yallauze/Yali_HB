import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  /* Using the decorator to receive the passed attribute 
  => then declare a property name with it's type to represent the passed data  */
  @Input('dataPassingAttribute') public cityArticle: Article;

  /* step 1: declare the output */
  @Output() public childEvent = new EventEmitter<string[]>();
  @Output() public childCounterEvent = new EventEmitter<number>();
  @Output() public isClickedEvent = new EventEmitter<boolean>();
  @Output() public sendArticleEvent = new EventEmitter<Article>();

  public colors: string[] = ["red", "green", "orange", "blue"];
  public counter: number = 0;
  public isClicked: boolean = false;

  constructor(private _router: Router) {}
  ngOnInit() {
    /* step 2: define the emit event to be fired */
    this.childEvent.emit(this.colors);
  }

  voteCounter(){
    this.counter++;
    this.childCounterEvent.emit(this.counter);
    this.isClicked = true;
    this.isClickedEvent.emit(this.isClicked);
  }
    
  goHomePage(){
    this._router.navigate(['/alaune']);
  }
  /* ['MyCompB', {id: "someId", id2: "another ID"}] */
}
