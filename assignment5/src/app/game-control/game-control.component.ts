import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  gameNumber: number;
  @Output() numberCreated = new EventEmitter<number>();
  intervalHandle: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.gameNumber = 0;
    console.log('game started');
    this.intervalHandle = setInterval(() => {
      this.gameNumber++;
      this.numberCreated.emit(this.gameNumber);
    }, 1000);
  }

  onStopGame() {
    console.log('game stopped');
    clearInterval(this.intervalHandle);
    this.gameNumber = 0;
  }
}
