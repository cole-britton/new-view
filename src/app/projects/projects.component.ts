import { Component, OnInit } from '@angular/core';
import { IProject } from '../project/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  imgUrlPrefix: string = "./assets/images/";

  projects: IProject[] = [{
    title: "Fairmount", description: "80 units, Slabtown Portland",
    image: this.imgUrlPrefix + "101_Fairmount_small.gif", link: "https://youtu.be/-phCWC9yDO0"
  }, {
    title: "Slate", description: "75 units, Central Eastside Portland",
    image: this.imgUrlPrefix + "803_slate_small.gif", link: "https://youtu.be/7Av-xv8MVvc"
  }, {
    title: "Almr", description: "57 units, Alphabet District Portland",
    image: this.imgUrlPrefix + "416_almr_small.gif", link: "https://youtu.be/nQM-LJuPooY"
  }, {
    title: "Sunnyside", description: "67 units, Southeast Portland",
    image: this.imgUrlPrefix + "314_sunnyside_small.gif", link: "https://youtu.be/CR3oo6Qi0xI"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
