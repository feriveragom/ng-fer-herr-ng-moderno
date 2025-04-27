import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  //selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      margin: 10px;
    }
  `
})
export class CounterPageComponent {
  counterSignal = signal(0);

  increaseBy(value: number) {
    this.counterSignal.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counterSignal.update(current => current - value);
  }

  reset() {
    this.counterSignal.set(0);
  }
}
