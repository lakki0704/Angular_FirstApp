import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
  constructor(private formbuilder: FormBuilder) {  }


  loginForm : FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email1 :['',Validators.required],
      password1 :['',Validators.required]
    })
  }
  

}


