import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-view';
  isNaviOpen = false;


  aboutUs = "New View was founded in 2018 with a bold purpose in mind: To change the way apartment communities market their availability, forever. In today’s modern age, customer needs evolve on a day to day basis, and saving time is more important than ever. The team at New View has dedicated their skillset to reimagining the prospect experience to benefit both the tenant and the leasing staff. We have to admit, we’re proud of our results. New View is placing engaging, cinematic, virtual walkthroughs in the hands of leasing professionals to equip them with a tool never before utilized by marketing strategies of the past. We love the way it works, and so do your prospects. Saving you time while creating a more engaged, educated, and interested potential tenant is our number one goal."


  constructor() {

  }


  menuToggle() {
    if (this.isNaviOpen) {
      document.getElementById('siteContainer').className = 'site-container';
    } else {
      document.getElementById('siteContainer').className = 'is-navi-open site-container';
    }
    this.isNaviOpen = !this.isNaviOpen;
  }
}
