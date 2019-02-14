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

  ageControl = new FormControl('', [Validators.required]);
  rentControl = new FormControl('', [Validators.required]);
  zipControl = new FormControl('', [Validators.required]);

  ages: string[] = ["18-24", "25-34", "35-44", "45+"];
  rents: string[] = ["$1000-$1499", "$1500-$1999", "$2000-$2499", "$2500+"];

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

  submitClicked() {
    this.surveyPackage.age = this.ageControl.value;
    this.surveyPackage.rent = this.rentControl.value;
    this.surveyPackage.zipcode = this.zipControl.value.trim();
    if (this.surveyPackage.age !== "" && this.surveyPackage.rent !== "" && this.surveyPackage.zipcode !== "") {
      this.submitSurvey();
    }
  }

  submitSurvey(){
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
