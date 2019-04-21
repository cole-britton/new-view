import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUs = "At New View, there are two goals that inspire us. One is to assist rental, commercial, and condo properties drive qualified leads to their doors. The other is to help leasing agents and brokers close deals more effectively than ever. Our vision is grounded by these statements, and our products are a reflection of them. The team at New View is experienced in your industry and possesses a passion for innovation. Customers who engage with our media are left wide eyed and grateful, which means you spend less time pitching and more time closing. There is no resource more precious than time. Improving your efficiency is our top priority. "

  constructor() { }

  ngOnInit() {
  }

}
