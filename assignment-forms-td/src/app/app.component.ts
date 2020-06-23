import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') myForm: NgForm;

  subscription = 'advanced';
  
  onSubmit() {
    console.log("Email: " + this.myForm.form.value.email);
    console.log("Subscription: " + this.myForm.form.value.subscription);
    console.log("Password: " + this.myForm.form.value.password);
  }
}
