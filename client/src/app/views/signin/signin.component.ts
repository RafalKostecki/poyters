import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { UserService } from '../../services/user.service';
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
  private signupMessage: string;

  constructor(
    private formBuilder: FormBuilder, 
    private uiService: UiService,
    private userService: UserService,
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
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4200",
          "Access-Control-Allow-Credentials": "true"
        },
        credentials: 'include',
        body: JSON.stringify(data)
      })
    .then(() => {
      fetch(`http://localhost:3000/users/profile/`,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:4200",
            "Access-Control-Allow-Credentials": "true"
          },
          credentials: 'include'
        })
      .then((res) => res.json())
      .then((resJSON) => {
        if (resJSON.statusCode === 401) {
          this.signupMessage = "Wrong username or password";
        } else {
          this.userService.setUserId(resJSON.userId);
          this.router.navigate(['']);
        }
      });
    })
  }
}
