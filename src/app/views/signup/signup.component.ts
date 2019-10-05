import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../assets/scripts/must-match.validadator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {

  private categoryName: string = "Sign up";
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

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

      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
