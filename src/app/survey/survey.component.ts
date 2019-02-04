import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  apartmentPhotos: string[] = [];
  presentedPhoto: string = '';

  constructor(private router: Router) { }

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
    this.presentedPhoto = "./assets/images/almr-1.jpg";
  }

  goHome() {
    this.router.navigate(['']);
  }

  over(imagePath) {
    this.presentedPhoto = imagePath;
  }

}
