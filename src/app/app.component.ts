import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = new BehaviorSubject<number>(0);

  incrementCounter(): void {
    const { value: currentCounterValue } = this.counter;
    this.counter.next(currentCounterValue + 1);
  }
}
