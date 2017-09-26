import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
@Output() eventTicker = new EventEmitter<{ ticker: number }>();
interval;

tickerCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  eventTimerStart() {
    this.interval = setInterval(() => {
      this.eventTicker.emit({
        ticker: this.tickerCounter++
      });
    }, 1000);
  }

  eventTimerStop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
