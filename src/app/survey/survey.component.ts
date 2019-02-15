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

  q1 = "Let’s say you were a prospective resident searching for a new apartment. How helpful would this video walkthrough be in making a decision to visit the property for a physical tour?";
  q2 = "Let’s say you were to call in to a leasing office and request a tour, and the agent you spoke with sent you 10 videos of units that were applicable to your needs. How would you feel about needing to physically tour all 10 once you arrived to see the units in person?";
  q3 = "Let's say you visit ten communities in search of a new home in one day. Upon returning home, staff from five of the properties send you photos and floorplans, and the other five send video walkthroughs such as this one. How helpful would it be to have the videos as a reference over just photos?";
  q4 = "Let’s say you’re moving to a new state, and won’t be able to take a physical tour of the properties you’re shopping online for. After finding four different communities that are all equally appealing, only two of them provided video walkthroughs such as this one. How much more likely would you be to lease a unit with video walkthroughs over a community with just photos?"
  q5 = "Let's say you visit two properties and tour both buildings. You're able to see a model apartment, but the actual unit you're interested in is still occupied. When you return to the leasing office, one agent shows you a video walkthrough of the occupied unit, and the other shows you a floor plan. If you liked both buildings equally, which unit would you feel more comfortable applying for?";

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
