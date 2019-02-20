import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';
import { ISurvey } from '../survey/survey';
import { Result } from './result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  subscription: Subscription;
  results: ISurvey[] = [];
  result: Result;

  ageLabels: string[] = ["18-24", "25-34", "35-44", "45+"];
  rentLabels: string[] = ["less than $1000", "$1000-$1499", "$1500-$1999", "$2000-$2499", "$2500+"];

  q1 = "Assume you are searching for a new apartment. How helpful would this video walkthrough be in making a decision to visit the property for a tour?";
  q2 = "If you were to call a leasing office requesting a tour, and the agent you spoke with sent you 10 videos of units that fit your needs, how would you feel about needing to see all 10 units on your tour?";
  q3 = "After a long day of apartment hunting, you return home to find follow ups from various leasing agents. Some sent floor plans, and others sent videos such as this one. How helpful would the videos be as a reference over the floor plans?";
  q4 = "Assume you’re moving to a new state with no way to tour the properties you’re shopping online for. If there were four properties you were equally interested in, but only two had videos, how much more likely would you be to lease one with videos over one with just photos?";
  q5 = "After touring two buildings and seeing both model units, you discover the homes you’re interested in are both still occupied. One leasing agent has a floor plan, and the other has a video walkthrough. If you liked each building equally, which would you feel more comfortable applying for?";

  constructor(private router: Router, private db: AngularFireDatabase) {
    this.result = new Result();
  }

  ngOnInit() {
    this.subscription = this.db.list<ISurvey>('completedSurveys').valueChanges().subscribe(d => {
      this.results = d;
      this.formatDataForDisplay();
      console.log(this.result);
    });
  }

  goHome() {
    this.router.navigate(['']);
  }

  formatDataForDisplay() {
    if (this.results.length > 0) {
      this.results.forEach(r => {
        for (var i = 0; i < 5; i++) {
          this.result.answersDict["" + (i + 1)] += r.answers[i];
        }
        this.result.ageDict[r.age] += 1;
        this.result.rentDict[r.rent] += 1;
        if (this.result.zipDict.hasOwnProperty(r.zipcode)) {
          this.result.zipDict[r.zipcode] += 1;
        } else {
          this.result.zipDict[r.zipcode] = 1;
        }
      });
      for (var a in this.result.answersDict) {
        if (this.result.answersDict.hasOwnProperty(a)) {
          this.result.answersDict[a] = this.result.answersDict[a] / this.results.length;
        }
      }
    }
  }

  getBar(value: number): string {
    return (value === 0 ? "0" : "" + (value/this.results.length)*100 + "%");
  }

  getAnswerAverage(value: number): string {
    return (value/10).toFixed(1) + "";
  }

  getIndent(value: number): string {
    return value + "%";
  }



}
