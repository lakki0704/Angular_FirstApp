import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  constructor(private formbuilder: FormBuilder) {}


  SignupForm : FormGroup;

  ngOnInit(): void {
    this.SignupForm = this.formbuilder.group({
      name :['',Validators.required],
      email :['',Validators.required],
      password :['',Validators.required]
    })
  }

}
