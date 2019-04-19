import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {

  packageOne: string[] = ["Community Promo video", "Market your model", "Youtube Management", "Social Media Content"];
  packageTwo: string[] = ["Community Promo video", "TRUVIEW Walkthroughs", "Aerial", "Youtube Management"];
  packageThree: string[] = ["Community Promo video", "Market your model", "TRUVIEW Walkthroughs", "Aerial", "Audio", "Youtube Management", "Social Media Content"];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  packageSelected(id: number) {
    this.router.navigate(['/projectbuilder/', id]);
  }

}
