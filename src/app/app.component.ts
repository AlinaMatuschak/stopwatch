import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // startTime = 0;
  // currentTime = 0;
  // offset = 0;

  // timerActive = false;

  timer = 0;

  changeTimer(time: number) {
    this.timer = time;
  };
  // timerId = 0;

  // counter() {
  //   this.currentTime = new Date().getSeconds();
  //   this.timer = this.currentTime - this.startTime + this.offset;
  //   this.timerId = window.setTimeout(this.counter.bind(this), 1000);
  // }

  // onStart() {
  //   if (this.timerActive) return;
  //   this.timerActive = true;

  //   this.startTime = new Date().getSeconds();
  //   this.counter();
  // }

  // onPause() {
  //   if (!this.timerActive) return;
  //   this.timerActive = false;

  //   this.offset = this.timer;
  //   clearTimeout(this.timerId);
  // }

  // onReset() {
  //   if (this.timer == 0) return;

  //   this.timer = 0;
  //   this.offset = 0;
  //   this.startTime = new Date().getSeconds();
  //   this.onStart();
  // }
}
