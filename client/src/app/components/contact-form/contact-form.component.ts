import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import formsConfig from '../../../assets/configs/formsConfig.json';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.styl']
})
export class ContactFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public contactForm: FormGroup;
  public formConfig = formsConfig.contact;
  public submitted = false;
  public signupMessage: string;


  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.name.min)
      ]],
      topic: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.topic.min),
        Validators.maxLength(this.formConfig.topic.max)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      content: ['', [
        Validators.required,
        Validators.minLength(this.formConfig.content.min),
        Validators.maxLength(this.formConfig.content.max)
      ]]
    });
  }

  get formControls() { 
    return this.contactForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) return;

    console.log('Success!', this.contactForm.value);
  }

}
