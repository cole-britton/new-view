import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-tool',
  templateUrl: './price-tool.component.html',
  styleUrls: ['./price-tool.component.css']
})
export class PriceToolComponent implements OnInit {

  totalPrice: string = "$0";
  totalSqft: number;
  units: number;
  upload: boolean = false;
  totalAmenitySqft: number;
  spaces: number;
  amenities: boolean = false;
  presentPricePerUnit: boolean = false;
  costPerUnit: string = "$0";


  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['']);
  }

  calcTotal() {
    var tempTotal = 0;
    var costPerSqFt = .125;
    var startingCostPerSqFt = .25
    var costPerSqFtAmenity = .20;
    var discountPerUnitSub50 = .00255102;
    var discountPerExtraUnit = .0001285714;
    var uploadCost = 5;
    var uploadDenominator = 2.65;
    this.presentPricePerUnit = false;

    if (this.totalSqft != null && this.units != null && this.totalSqft > 0 && this.units > 0) {
      var averageSqft = this.totalSqft/this.units;
      if (this.units <= 49) {
        var sub50Discount = startingCostPerSqFt - (discountPerUnitSub50 * this.units);
        tempTotal = sub50Discount * averageSqft * this.units;
      } else {
        tempTotal = costPerSqFt * averageSqft * 50;
        var remainingUnits = (this.units - 50);
        var discount = remainingUnits * discountPerExtraUnit;
        var newCostPerSqFt = costPerSqFt - discount;
        if (remainingUnits > 350) {
          newCostPerSqFt = .08;
        }
        tempTotal = tempTotal + (remainingUnits * newCostPerSqFt * averageSqft);
      }


      if (this.upload) {
        var uploadBonus = (uploadCost / uploadDenominator) * (averageSqft / 1000);
        tempTotal = tempTotal + ((uploadBonus + uploadCost) * this.units);
      }

      var costPerUnitNum = Math.ceil(tempTotal / this.units);
      this.costPerUnit = "$" + this.numberWithCommas(costPerUnitNum);
      this.presentPricePerUnit = true;

      if (this.totalAmenitySqft != null && this.spaces != null && this.amenities) {
        if (this.spaces > 0) {
          tempTotal = tempTotal + ((this.totalAmenitySqft / this.spaces) * this.spaces * costPerSqFtAmenity);
        }
      }

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
