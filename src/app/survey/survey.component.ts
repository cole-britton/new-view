import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISurvey } from './survey';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  apartmentPhotos: string[] = [];
  presentedPhoto: string = '';
  toTen: number[] = [];
  surveyComplete: boolean = false;

  surveyPackage: ISurvey = {
    answers: [50, 50, 50, 50, 50],
    age: "",
    rent: "",
    zipcode: ""
  }

  q1 = "Assume you are searching for a new apartment. How helpful would this video walkthrough be in making a decision to visit the property for a tour?";
  q2 = "If you were to call a leasing office requesting a tour, and the agent you spoke with sent you 10 videos of units that fit your needs, how would you feel about needing to see all 10 units on your tour?";
  q3 = "After a long day of apartment hunting, you return home to find follow ups from various leasing agents. Some sent floor plans, and others sent videos such as this one. How helpful would the videos be as a reference over the floor plans?";
  q4 = "Assume you’re moving to a new state with no way to tour the properties you’re shopping online for. If there were four properties you were equally interested in, but only two had videos, how much more likely would you be to lease one with videos over one with just photos?";
  q5 = "After touring two buildings and seeing both model units, you discover the homes you’re interested in are both still occupied. One leasing agent has a floor plan, and the other has a video walkthrough. If you liked each building equally, which would you feel more comfortable applying for?";

  ageControl = new FormControl('', [Validators.required]);
  rentControl = new FormControl('', [Validators.required]);
  zipControl = new FormControl('', [Validators.required]);

  ages: string[] = ["18-24", "25-34", "35-44", "45+"];
  rents: string[] = ["less than $1000", "$1000-$1499", "$1500-$1999", "$2000-$2499", "$2500+"];

  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.apartmentPhotos = [
      "./assets/images/almr-1.jpg",
      "./assets/images/almr-2.jpg",
      "./assets/images/almr-3.jpg",
      "./assets/images/almr-4.jpg",
      "./assets/images/almr-5.jpg",
      "./assets/images/almr-6.jpg",
      "./assets/images/almr-7.jpg",
      "./assets/images/almr-8.jpg",
      "./assets/images/almr-9.jpg",
      "./assets/images/almr-10.jpg",
      "./assets/images/almr-11.jpg"];
    this.toTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.presentedPhoto = "./assets/images/almr-1.jpg";
  }

  goHome() {
    this.router.navigate(['']);
  }

  over(imagePath) {
    this.presentedPhoto = imagePath;
  }

  presentNextPhoto() {
    let currentIndex = parseInt(this.getCurrentPhoto().join(''));
    let newIndex = currentIndex + 1;
    if(currentIndex === 11){
      newIndex = 1;
    } 
    this.presentedPhoto = "./assets/images/almr-" + newIndex + ".jpg";
  }

  presentPreviousPhoto() {
    let currentIndex = parseInt(this.getCurrentPhoto().join(''));
    let newIndex = currentIndex - 1;
    if(currentIndex === 1){
      newIndex = 11;
    } 
    this.presentedPhoto = "./assets/images/almr-" + newIndex + ".jpg";
  }

  getCurrentPhoto() {
    var numberPattern = /\d+/g;
    return this.presentedPhoto.match(numberPattern);
  }

  submitClicked() {
    this.surveyPackage.age = this.ageControl.value;
    this.surveyPackage.rent = this.rentControl.value;
    this.surveyPackage.zipcode = this.zipControl.value.trim();
    if (this.surveyPackage.age !== "" && this.surveyPackage.rent !== "" && this.surveyPackage.zipcode !== "") {
      this.submitSurvey();
    }
  }

  submitSurvey() {
    this.surveyComplete = true;
    this.db.list('completedSurveys').push(this.surveyPackage)
      .then(_ => {
        this.surveyPackage = {
          answers: [50, 50, 50, 50, 50],
          age: "",
          rent: "",
          zipcode: ""
        }
      })
  }

}
