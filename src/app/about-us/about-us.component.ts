import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUs = "At New View, there are two goals that inspire us. One is to assist rental, commercial, and condo properties drive qualified leads to their doors. The other is to help leasing agents and brokers close deals more effectively than ever. Our vision is grounded by these statements, and our products are a reflection of them. The team at New View is experienced in your industry and possesses a passion for innovation. Customers who engage with our media are left wide eyed and grateful, which means you spend less time pitching and more time closing. There is no resource more precious than time. Improving your efficiency is our top priority. "
  aboutZach = "Zach has spent his career integrating his skill set into the world of property management. In 2012, he took a concierge position in a downtown high rise and never looked back. Seven years later, his accomplishments include operating successful lease ups, earning a broad understanding of NW development strategies, and consulting architects and developers on what their future tenants really want. Zach prides himself on his ability to build rewarding relationships and inspire innovative conversations. His life is spent indulging himself with the delights of the Pacific Northwest. As a young entrepreneur with long term investments in his community, Zach is proud to have co-founded a startup based in his hometown of Portland, OR."
  aboutCole = "Cole is a Gonzaga graduate with a degree in computer science and acts as the foundation for New View’s technical innovation. After gaining some invaluable experience as an iPhone app developer, he was recruited as a software engineer in Portland, OR. Although his career is embedded in computer science, his passions have always involved a taste for video production and design. Cole’s accomplishments in this field include building his own media brand, designing logos, and producing videography for weddings, travel, and start-ups. All of Cole’s projects are filtered through his desire to locate the highest intersection between function and beauty, and his role at New View is the latest example of this vision.";
  constructor() { }

  ngOnInit() {
  }

}
