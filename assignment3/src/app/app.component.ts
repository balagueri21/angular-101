import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret: boolean = true;

  clicks = [];
  

  toggleDisplay() {
    this.displaySecret = !this.displaySecret;
    this.clicks.push('Click timestamp: ' + new Date());
  }
}
