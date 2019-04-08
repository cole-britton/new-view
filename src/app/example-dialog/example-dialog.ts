import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    title: string;
    content: string;
    image: string;
}

@Component({
    selector: 'example-dialog',
    templateUrl: 'example-dialog.html'
})
export class ExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<ExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onOkClick(): void {
        this.dialogRef.close();
    }

}