import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {

  private categoryName = "Sign in";
  signInForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private data: UiService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName);

    this.signInForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() { 
    return this.signInForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid) return;

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {"username": "john", "password": "changeme"}
    // };
  
    // this.http.post('http://localhost:3000/auth/login', httpOptions).toPromise();

    const data = {
      username: this.signInForm.value.login,
      password: this.signInForm.value.password
    }

    fetch('http://localhost:3000/auth/login',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3000",
          Accept: "application/json",
        },
        body: JSON.stringify(data)
      }
    )
    .then((response) => response.json())
    .then((responseJSON) =>  {
      if (responseJSON.statusCode === 401 && responseJSON.error === 'Unauthorized') {
        console.log('NIEPRAWIDŁOWY LOGIN LUB HASŁO')
      } else {
        console.log('zalogowano na jwt: ', responseJSON.access_token)
      }
    })
    .catch(err => console.log(err));
  }
}
