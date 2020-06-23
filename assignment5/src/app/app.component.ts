import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberCreated(createdNumber: number) {
    if (createdNumber % 2 == 0) {
      this.evenNumbers.push(createdNumber);
    } else {
      this.oddNumbers.push(createdNumber);
    }
  }
}
