import { Component, OnInit } from '@angular/core';
import { IContact } from './contact-package';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  contactPackage: IContact = {
    name: "",
    email: "",
    message: ""
  }

  constructor(private formBuilder: FormBuilder, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get f() { return this.contactForm.controls; }


  getErrorMessage(formControl: FormControl) {
    return formControl.hasError('required') ? 'Can\'t be left blank' : formControl.hasError('email') ? 'Not a valid email' : '';
  }

  sendClicked() {
    if (this.contactForm.invalid) {
      return;
    }

    this.submitMessage(this.contactForm.value);
  }

  submitMessage(cf: {}) {
    this.db.list('contactUs').push(cf)
      .then(_ => {
        this.submitted = true;
      });
  }

}
