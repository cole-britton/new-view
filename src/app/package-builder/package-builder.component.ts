import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-builder',
  templateUrl: './package-builder.component.html',
  styleUrls: ['./package-builder.component.css']
})
export class PackageBuilderComponent implements OnInit {

  packageIdFromRoute: number;

  constructor(private router: Router, private db: AngularFireDatabase, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.packageIdFromRoute=this.ar.snapshot.params['id'];
  }
  

  
}
