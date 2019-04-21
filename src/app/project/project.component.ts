import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-comp',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() link: string;

  constructor() { }

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

}
