import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { INewViewProject } from '../project-builder/new-view-project';
import { parse } from 'querystring';

export interface DialogData {
    orderedProject: INewViewProject;
}

@Component({
    selector: 'order-dialog',
    templateUrl: 'order-dialog.html',
    styleUrls: ['./order-dialog.css']
})
export class OrderDialog implements OnInit{

    tableData = [];
    totalCost: number = 0;
    columnsToDisplay = ['feature', 'price'];

    constructor(
        public dialogRef: MatDialogRef<OrderDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onClose(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.tableData = this.data.orderedProject.features.map(f => ({title: f.title, totalCost: f.totalCost}));
        this.tableData.push({title: "Setup fee", totalCost: "500"});

        this.tableData.forEach(f => {
            this.totalCost += parseInt(f.totalCost);
        });
    }


}