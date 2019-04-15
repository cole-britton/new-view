import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  packageOne: string[] = ["Community Promo video", "Market your model", "Youtube Management", "Social Media Content"];
  packageTwo: string[] = ["Community Promo video", "TRUVIEW Walkthroughs", "Aerial", "Youtube Management"];
  packageThree: string[] = ["Community Promo video", "Market your model", "TRUVIEW Walkthroughs", "Aerial", "Audio", "Youtube Management", "Social Media Content"];


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

  packageSelected(id: number) {
    this.router.navigate(['/projectbuilder/', id]);
  }

}
