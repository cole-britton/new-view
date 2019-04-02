import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  aboutUs = "New View was founded in 2018 with a bold purpose in mind: to change the way apartment communities market their availability, forever. In today’s modern age, customer needs evolve on a day to day basis, and saving time is more important than ever. The team at New View has dedicated their skillset to reimagining the prospect experience to benefit both the tenant and the leasing staff. We have to admit, we’re proud of our results. New View is placing engaging, cinematic, virtual walkthroughs in the hands of leasing professionals to equip them with a tool never before utilized by marketing strategies of the past. We love the way it works, and so do your prospects. Saving you time while creating a more engaged, educated, and interested potential tenant is our number one goal."
  packageOne: string[] = ["Building promo video", "Model shot", "5 videos optimized for social", "Youtube channel creation and posting"];
  packageTwo: string[] = ["Building promo video", "Model shot + all units", "360 drone shot", "5 videos optimized for social","Youtube channel creation and posting"];
  packageThree: string[] = ["Model shot + all units", "360 drone shot", "Youtube channel creation and posting"];
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(urlFromPage: string) {
    let url: string = '';
    if (!/^http[s]?:\/\//.test(urlFromPage)) {
      url += 'http://';
    }

    url += urlFromPage;
    window.open(url, "_blank");
  }

  navToPriceTool() {
    this.router.navigateByUrl('/pricetool');
  }

  packageSelected(id: number){
    this.router.navigate(['/packagebuilder/', id]);
  }

}
