import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.scss']
})
export class ControlersComponent implements OnInit {
  @Input() timer: number = 0;
  @Output() onChangeTimer = new EventEmitter<number>()

  startTime = 0;
  currentTime = 0;
  offset = 0;

  timerActive = false;
  timerId = 0;

  counter() {
    this.currentTime = new Date().getSeconds();
    const newTimer = this.currentTime - this.startTime + this.offset;
    this.onChangeTimer.emit(newTimer);
    this.timerId = window.setTimeout(this.counter.bind(this), 1000);
  }

  onStart() {
    this.timerActive = true;
    this.startTime = new Date().getSeconds();

    this.counter();
  }

  onPause() {
    this.timerActive = false;
    this.offset = this.timer;

    clearTimeout(this.timerId);
  }

  onReset() {
    this.onChangeTimer.emit(0);
    this.offset = 0;
    this.startTime = new Date().getSeconds();

    this.onStart();
  }

  constructor() { }

  ngOnInit(): void {
  }
}
