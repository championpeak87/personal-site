import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  public contactFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.contactFormGroup = formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.contactFormGroup.controls);
    if (this.contactFormGroup.valid) {
      // TODO: Handle POST request
    }
  }

}
