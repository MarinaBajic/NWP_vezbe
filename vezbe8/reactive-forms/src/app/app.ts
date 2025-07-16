import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('reactive-forms');

  accountTypes!: string[];
  loginForm!: FormGroup;
  submitted!: boolean;
  forbiddenUsernames!: string[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.submitted = false;
    this.accountTypes = ["Personal", "Bussiness"];
    this.forbiddenUsernames = ["Pera", "Mika"];
    this.loginForm = this.fb.group({
      "profileData": this.fb.group({
        "username": [null, [Validators.required, this.checkUsername.bind(this)]],
        "password": [null, Validators.required]
      }),
      "email": [null, [Validators.required, Validators.email]],
      "accountType": ["Personal", Validators.required],
      "codes": this.fb.array([])
    });

    // Without FormBuilder

    // this.loginForm = new FormGroup({
    //   "profileData": new FormGroup({
    //     "username": new FormControl(null, [Validators.required, this.checkUsername.bind(this)]),
    //     "password": new FormControl(null, Validators.required),
    //   }),
    //   "email": new FormControl(null, [Validators.required, Validators.email]),
    //   "accountType": new FormControl("Personal", Validators.required),
    //   "codes": new FormArray([])
    // });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get username() {
    return this.loginForm.get("profileData.username");
  }

  get password() {
    return this.loginForm.get("profileData.password");
  }

  get accountType() {
    return this.loginForm.get("accountType");
  }

  get codes() {
    return this.loginForm.get('codes') as FormArray;
  }

  onAddCode() {
    const control = new FormControl(null);
    this.codes.push(control);
  }

  checkUsername(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { "forbiddenUsername": true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm);
  }

}
