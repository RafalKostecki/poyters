import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.styl']
})
export class SigninComponent implements OnInit {

  private categoryName: string = "Sign in";
  signInForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private data: UiService) { }

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

    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.signInForm.value))
}
}
