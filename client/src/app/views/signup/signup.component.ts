import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../assets/scripts/must-match.validadator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {

  private categoryName = "Sign up";
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private data: UiService) { }

  ngOnInit() {
    this.data.changeCategory(this.categoryName);

    this.registerForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  get formControls() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) return;

    const data = {
      username: this.registerForm.value.login,
      password: this.registerForm.value.password,
      mail: this.registerForm.value.email,
    };

    console.log('data', data);

    fetch('http://localhost:3000/users',
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
      if (responseJSON.status === 409) {
        console.log('User already exists')
      } else {
        console.log('Account created: ', responseJSON)
      }
    })
    .catch(err => console.log(err));
  }

}
