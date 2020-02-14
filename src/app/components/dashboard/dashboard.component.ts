import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { RandomColorService } from 'src/app/services/random-color.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public affichage: boolean = false;
  public condition: boolean = false;
  public favoriTeam: string = "USAP";
  public cities = ["Chengdu", "Clermont-Ferrand", "Paris", "Beijing"];
  /* Declarer cityArticles as an array of type Article */
  public cityArticles: Article[];
  public nbVotes: number = 0;
  public voteCounterTotal: number = 0;
  public recievedClickedArticle: Article;
  public isLoading: boolean;

  // Service
  public myColor: string;
  constructor(private _randomColorService: RandomColorService, private _articleService: ArticleService) { }
  ngOnInit() {
    setInterval(() => {
      this.myColor = this._randomColorService.getRandomColor();
    }, 300);
    // get data from my service
    this.isLoading = true;
    this._articleService.getCityArticles().subscribe(
      (data: Article[]) => {
        this.cityArticles = data;
        this.isLoading = false;
      }
    );
  }

  imgToggle(): void {
    this.affichage = !this.affichage;
    this.condition = !this.condition;
  }
  getVotes(p: number) {
    this.nbVotes = p;
  }
  isClikedShow(p: boolean) {
    if (p == true) {
      this.voteCounterTotal++;
    }
  }


}
