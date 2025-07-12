import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [FormsModule, NgClass],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  validated: boolean;
  form_classes: { [key: string]: boolean }
  defaultUserType: string;
  countries: string[];

  constructor() {
    this.validated = false;
    this.form_classes = { "was-validated": false };
    this.defaultUserType = "person";
    this.countries = [
      "Serbia",
      "Montenegro",
      "North Macedonia",
      "Croatia",
      "Bosnia and Hercegovina",
      "Slovenia"
    ];
  }

  updateBootstrapValidation() {
    this.form_classes = { "was-validated": this.validated };
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.form.value);
    this.validated = true;
    this.updateBootstrapValidation();
  }

  onReset(form: NgForm) {
    form.reset();
    this.form_classes = { "was-validated": false };
  }
}
