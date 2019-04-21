import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { INewViewProject, IFeature } from './new-view-project';
import { MatDialog } from '@angular/material';
import { ExampleDialog } from '../example-dialog/example-dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { OrderDialog } from '../order-dialog/order-dialog';

@Component({
  selector: 'app-project-builder',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './project-builder.component.html',
  styleUrls: ['./project-builder.component.css']
})
export class ProjectBuilderComponent implements OnInit {

  currentProject: INewViewProject;
  projectImage: string;
  quantities: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  featuresCatalog: IFeature[] = [{
    id: 0,
    title: "Community Promo Video",
    description: "Your customized community promo will capture everything your property represents, and is designed to blend into the fabric of your digital media marketing. Attach a link to this content in every prospect request to stand out from the crowd, or have your marketing team embed into your property website.",
    options: [{
      description: "60 second promo features an engaging cut of drone footage, lobby, models, and amenities",
      value: 1495,
      quantity: 1,
      multi: false,
      selected: true,
      subOptions: [{
        description: "Number of amenities to be highlighted",
        quantity: 0,
        multi: true,
        value: 50,
        selected: true,
        applyAll: false
      },
      {
        description: "Number of models to be highlighted",
        quantity: 0,
        multi: true,
        value: 50,
        selected: true,
        applyAll: false
      }]
    }],
    added: false,
    totalCost: 1495
  },
  {
    id: 1,
    title: "Market Your Model",
    description: "We think all the work that goes into designing your model apartments deserves more than just a few photos. These walkthroughs should be issued to all prospects, but your potential tenants from out of state will be blown away! While discussing your community over the phone, send them a link to virtually tour while you simultaneously upsell the features that make your homes unique.",
    options: [{
      description: "TRUVIEW walkthrough of model home",
      value: 195,
      quantity: 1,
      multi: true,
      selected: false,
      subOptions: [{
        description: "Add unit feature graphics to each model",
        value: 50,
        multi: false,
        quantity: 0,
        selected: false,
        applyAll: true
      }]
    }],
    added: false,
    totalCost: 195
  },
  {
    id: 2,
    title: "TRUVIEW Walkthoughs",
    description: "When we capture walkthroughs of each and every floor plan in your community, your staff has a tool at their disposal unlike any before. Prospects who see multiple buildings in a day will be able to recall the details of your community with ease. Renting occupied units is now a breeze. Loved ones who were unable to visit now get a chance to see exactly what their partner saw. TRUVIEW replaces confusion with clarity, consider this a game-changer.",
    options: [{
      description: "TRUVIEW Walkthrough of available floorplans",
      value: 195,
      quantity: 1,
      multi: true,
      selected: false,
      subOptions: []
    }],
    added: false,
    totalCost: 195
  }, {
    id: 3,
    title: "Aerial",
    description: "Your prospects are just as interested in your properties features and amenities as they are the community you’re nestled in. With our 360* drone footage, they’ll have a chance to see just what makes your neighborhood special. After you choose the 10 best landmarks within walking distance, we’ll be sure your prospects know right where they can enjoy a burger, catch a flick, or shop for their groceries well before moving into their new home.",
    options: [{
      description: "360" + String.fromCharCode(176) + " drone footage highlighting hotspots",
      value: 495,
      quantity: 1,
      multi: false,
      selected: false,
      subOptions: []
    }],
    added: false,
    totalCost: 495
  },
  {
    id: 4,
    title: "Audio",
    description: "A well placed audio background track helps keep your viewers engaged. We’ll select one that suits your properties aesthetic for free, but if you’d like to spice things up a bit, we recommend licensing additional tracks to avoid viewer burn out. Hint: Licensing additional audio is recommended when more than 5 TRUEVIEW walkthroughs are captured at your property.",
    options: [{
      description: "License additional audio tracks",
      value: 50,
      quantity: 1,
      multi: true,
      selected: false,
      subOptions: []
    }],
    added: false,
    totalCost: 50
  },
  {
    id: 5,
    title: "YouTube Management",
    description: "When YouTube management is secured through NEW VIEW, we manage everything from the ground up. Our team is on top of market trends and key phrasing to assure your channel looks clean and professional. You’ll receive a monthly report that breaks down the way your viewers are engaging with your content, and we’ll recommend adjustments based on your properties performance.",
    options: [{
      description: "Build YouTube channel",
      value: 195,
      quantity: 1,
      multi: false,
      selected: false,
      subOptions: [{
        description: "Monthly YouTube Reporting ($65 billed monthly after 3 month free trial)",
        value: 65,
        quantity: 1,
        multi: false,
        selected: false,
        applyAll: false
      }]
    }],
    added: false,
    totalCost: 195
  },
  {
    id: 6,
    title: "Social Media Content",
    description: "Prospects are finding new ways to source valuable information about your property, and it’s on you to generate content that attracts their interest. Our social media cuts are restructured clips of your Community Promo Video designed to build your communities brand on Instagram, Twitter, and Facebook. These renditions will be optimized to thrive on all mobile platforms, YouTube, and social media outlets.",
    options: [{
      description: "A 5 second, 10 second, and 15 second promo each optimized for social",
      value: 195,
      quantity: 1,
      multi: false,
      selected: false,
      subOptions: [{
        description: "Additional unique 5 second promo(s)",
        value: 50,
        quantity: 0,
        multi: true,
        selected: true,
        applyAll: false
      },
      {
        description: "Additional unique 10 second promo(s)",
        value: 65,
        quantity: 0,
        multi: true,
        selected: true,
        applyAll: false
      },
      {
        description: "Additional unique 15 second promo(s)",
        value: 80,
        quantity: 0,
        multi: true,
        selected: true,
        applyAll: false
      }]
    }],
    added: false,
    totalCost: 250
  }];

  constructor(private router: Router, private db: AngularFireDatabase, private ar: ActivatedRoute, public dialog: MatDialog) {
    this.currentProject = { id: "0", title: "", totalCost: 0, image: "", features: [] };
  }

  ngOnInit() {
    this.setCurrentPackage(this.ar.snapshot.params['id'])
  }

  setCurrentPackage(packageId: string) {
    this.currentProject.id = packageId;
    this.currentProject.title = this.setCurrentPackageContents(this.currentProject.id);
    this.updateTotalCost();
  }

  setCurrentPackageContents(id: string): string {
    var title = "";
    switch (id) {
      case "1":
        title = "Social Boost";
        this.projectImage = "./assets/images/social-boost.png";
        this.addPresetFeatures([0, 1, 5, 6]);
        break;
      case "2":
        title = "Leasing Tool";
        this.projectImage = "./assets/images/leasing-tool.png";
        this.addPresetFeatures([0, 1, 2, 5]);
        break;
      case "3":
        title = "The Works";
        this.projectImage = "./assets/images/the-works.png";
        this.addPresetFeatures([0, 1, 2, 3, 4, 5, 6]);
        break;
      default:
        title = "Custom Package"
        this.projectImage = "./assets/images/social-boost.png";
    }
    return title;
  }

  addPresetFeatures(featureIdexes: number[]) {
    featureIdexes.forEach(featureIndex => {
      this.featuresCatalog[featureIndex].added = true;
      this.currentProject.features.push(this.featuresCatalog[featureIndex]);
    });
  }

  updateTotalCost() {
    this.currentProject.totalCost = 0;
    this.currentProject.features.forEach(f => {
      this.currentProject.totalCost += f.totalCost;
    });
  }

  onQuantityChange(option: any) {
    option.selected = (option.num > 0);
  }

  onFeatureAdd(feature: IFeature) {
    feature.added = true;
    this.currentProject.features.push(feature);

    this.updateTotalCost();
  }

  onFeatureRemove(feature: IFeature) {
    feature.added = false;
    this.currentProject.features = this.currentProject.features.filter(function (f) {
      return f.id !== feature.id;
    });

    this.updateTotalCost();
  }

  calculateCostOfFeature(feature: IFeature): void {
    var tempTotal = 0;

    feature.options.forEach(option => {
      tempTotal += (option.value * option.quantity);
      option.subOptions.forEach(subOption => {
        if (subOption.selected) {
          if(subOption.applyAll){
            subOption.quantity = option.quantity;
          }
          tempTotal += (subOption.value * subOption.quantity);
        }
      })
    });

    feature.totalCost = tempTotal;

    if (feature.added) {
      this.updateTotalCost();
    }
  }

  goTo(route: string) {
    this.router.navigateByUrl('/' + route);
  }

  openExampleDialog(t: string, c: string): void {
    this.dialog.open(ExampleDialog, {
      data: { title: t, content: c },
      panelClass: 'nv-dialog'
    });
  }

  openOrderDialog(orderedProject: INewViewProject): void {
    this.dialog.open(OrderDialog, {
      data: { orderedProject: orderedProject },
      panelClass: 'nv-dialog'
    });
  }

  onOrderClicked(){
    if(this.currentProject.totalCost === 0) {
      this.openExampleDialog("Oops", "You haven't added anything to your project. Add a few things and then try to send us your order again.")
    } else {
      this.openOrderDialog(this.currentProject);
    }


  }
}
