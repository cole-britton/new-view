import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { INewViewPackage } from './new-view-package';

@Component({
  selector: 'app-package-builder',
  templateUrl: './package-builder.component.html',
  styleUrls: ['./package-builder.component.css']
})
export class PackageBuilderComponent implements OnInit {

  currentPackage: INewViewPackage;

  constructor(private router: Router, private db: AngularFireDatabase, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.setCurrentPackage(this.ar.snapshot.params['id'])
  }
  

  setCurrentPackage(packageId: number) {
    this.currentPackage.id = packageId;
  }
}
