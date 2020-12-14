import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() timer: number = 0;

  getTime(): string {
    const timeString = new Date(0, 0, 0, 0, 0, this.timer);

    const hours = timeString.getHours();
    const minutes = timeString.getMinutes();
    const seconds = timeString.getSeconds();

    const time = [hours, minutes, seconds];

    return time
      .map(timeValue => timeValue < 10 ? `0${timeValue}` : timeValue)
      .join(':');
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
