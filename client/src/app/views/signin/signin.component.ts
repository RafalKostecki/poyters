import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private uiService: UiService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.uiService.changeCategory(this.categoryName);

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

    if (this.signInForm.invalid) return;

    const data = {
      username: this.signInForm.value.login,
      password: this.signInForm.value.password
    }

    fetch('http://localhost:3000/auth/login',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    ).then(() => {
      fetch(`http://localhost:3000/users/profile/`,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Origin: "http://localhost:3000",
            Accept: "application/json"
          }
        })
      .then((res) => res.json())
      .then((resJSON) => {
        console.log('resJSON', resJSON)
      });
    })
    // .then((response) => console.log(response))
    // .then((responseJSON) =>  {
    //   if (responseJSON.statusCode === 401 && responseJSON.error === 'Unauthorized') {
    //     console.log('NIEPRAWIDŁOWY LOGIN LUB HASŁO')
    //   } else {
    //     console.log(responseJSON)
    // this.authService.changeToken(responseJSON.access_token);
    // this.router.navigate(['']);

    // fetch(`http://localhost:3000/users/profile/`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       "Content-Type": "application/json",
    //       Origin: "http://localhost:3000",
    //       Accept: "application/json",
    //       credentials: 'include'
    //     }
    //   }
    // )
    // .then((res) => res.json())
    // .then((resJSON) => {
    //   console.log('resJSON', resJSON)
    // });
    //   }
    // })
    // .catch(err => {throw new Error(err)});
  }
}
