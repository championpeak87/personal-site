import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { init } from 'emailjs-com';
import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  public contactFormGroup: FormGroup;
  public loading: boolean = false;
  public sent: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactFormGroup = formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    init("user_Z0HoAySd9go54YkIc9rOM");
  }

  public async onSubmit() {
    if (this.contactFormGroup.valid && !this.sent) {
      this.loading = true;
      await this.sendForm();
      this.loading = false;
    }
  }

  private async sendForm() {
    const params = {
      name: this.contactFormGroup.controls.name.value,
      lastname: this.contactFormGroup.controls.lastname.value,
      email: this.contactFormGroup.controls.email.value,
      message: this.contactFormGroup.controls.message.value
    };

    await emailjs.send('service_in4uh5c', 'template_pofu7se', params)
      .then((res) => {
        console.log("success", res.status)
        this.sent = true;
      });
  }

}
