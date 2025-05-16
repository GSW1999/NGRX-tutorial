import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  standalone: false,
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  constructor(private store:Store<{counter:{counter:number}}>){}

  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment())

  }

  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());

  }

  onReset() {
   this.store.dispatch(reset());
  }
}
