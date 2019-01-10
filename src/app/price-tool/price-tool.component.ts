import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  totalAmenitySqft: number;
  spaces: number;
  amenities: boolean = false;


  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['']);
  }

  calcTotal() {
    var tempTotal = 0;
    var costPerSqFt = .125;
    var costPerSqFtAmenity = .20;
    var discountPerExtraUnit = .0001285714;
    var uploadCost = 5;
    var uploadDenominator = 2.65;

    if (this.averagesqft != null && this.units != null && this.averagesqft > 0 && this.units > 0) {
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
        tempTotal = tempTotal + (remainingUnits * newCostPerSqFt * this.averagesqft);
      }

      if (this.upload) {
        var uploadBonus = (uploadCost/uploadDenominator) * (this.averagesqft/1000);
        tempTotal = tempTotal + ((uploadBonus + uploadCost) * this.units);
      }

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
