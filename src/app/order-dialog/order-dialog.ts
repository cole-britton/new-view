import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { INewViewProject } from '../project-builder/new-view-project';
import { parse } from 'querystring';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { IOrder } from './order';
import { AngularFireDatabase } from 'angularfire2/database';

export interface DialogData {
    orderedProject: INewViewProject;
}

@Component({
    selector: 'order-dialog',
    templateUrl: 'order-dialog.html',
    styleUrls: ['./order-dialog.css']
})
export class OrderDialog implements OnInit {

    tableData = [];
    totalCost: number = 0;
    columnsToDisplay = ['feature', 'price'];
    showDetails: boolean = true;

    orderForm: FormGroup;
    submitted = false;

    name = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);
    message = new FormControl('');

    orderPackage: IOrder = {
        name: "",
        email: "",
        message: "",
        orderedProject: this.data.orderedProject
    }

    constructor(
        public dialogRef: MatDialogRef<OrderDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private db: AngularFireDatabase) {

        this.orderForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['']
        });
    }

    get f() { return this.orderForm.controls; }


    getErrorMessage(formControl: FormControl) {
        return formControl.hasError('required') ? 'Can\'t be left blank' : formControl.hasError('email') ? 'Not a valid email' : '';
    }

    onClose(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.tableData = this.data.orderedProject.features.map(f => ({ title: f.title, totalCost: f.totalCost }));
        this.tableData.push({ title: "Setup fee", totalCost: "500" });

        this.tableData.forEach(f => {
            this.totalCost += parseInt(f.totalCost);
        });
    }

    onLooksGood() {
        this.showDetails = false;
    }

    onSubmitOrder() {
        if (this.orderForm.invalid) {
            return;
        }
        this.submitOrder(this.orderForm.value);
    }

    submitOrder(oF: {}) {
        this.submitted = true;
        this.orderPackage.name = oF['name'];
        this.orderPackage.email = oF['email'];
        this.orderPackage.message = oF['message'];
        console.log(this.orderPackage);
    }

}