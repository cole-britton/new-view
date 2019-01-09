import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-tool',
  templateUrl: './price-tool.component.html',
  styleUrls: ['./price-tool.component.css']
})
export class PriceToolComponent implements OnInit {

  totalPrice: string = "$0";
  averagesqft: number;
  units: number;
  upload: boolean = false;


  constructor() { }

  calcTotal() {
    var tempTotal = 0;
    var costPerSqFt = .125;
    var discountPerExtraUnit = .0001285714;

    if (this.averagesqft != null && this.units != null) {
      if (this.units <= 50) {
        tempTotal = costPerSqFt * this.averagesqft * this.units;
      } else {
        tempTotal = costPerSqFt * this.averagesqft * 50;
        var remainingUnits = (this.units - 50);
        var discount = remainingUnits * discountPerExtraUnit;
        var newCostPerSqFt = costPerSqFt - discount;
        if (remainingUnits > 350) {
          newCostPerSqFt = .08;
        }
        
        console.log("------------------new calc------------------");
        console.log("remaining units: " + remainingUnits);
        console.log("discount: " + discount);
        console.log("newCostPerSqFt: " + newCostPerSqFt);
        console.log("tempTotal before: " + tempTotal);
        tempTotal = tempTotal + (remainingUnits * newCostPerSqFt * this.averagesqft);
        console.log("tempTotal after: " + tempTotal);
      }
    }

    if (this.upload) {
      tempTotal = tempTotal + (5 * this.units);
    }

    tempTotal = Math.floor(tempTotal); //round to nearest dollar
    this.totalPrice = "$" + this.numberWithCommas(tempTotal);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  ngOnInit() {
  }

}
