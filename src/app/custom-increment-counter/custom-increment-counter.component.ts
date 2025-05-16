import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { customIncrement } from '../counter/state/counter.actions';

@Component({
  selector: 'app-custom-increment-counter',
  standalone: false,
  templateUrl: './custom-increment-counter.component.html',
  styles: ``
})
export class CustomIncrementCounterComponent {
  value=0
  constructor(private store:Store<{counter:CounterState}>){}

  addCounter(){
  console.log(this.value);
  this.store.dispatch(customIncrement({value:this.value}))
  }

}
