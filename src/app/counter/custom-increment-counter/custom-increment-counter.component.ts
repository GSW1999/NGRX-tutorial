import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement, updateChannelName } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-increment-counter',
  standalone: false,
  templateUrl: './custom-increment-counter.component.html',
  styles: ``
})
export class CustomIncrementCounterComponent {
  value=0;
  // channelName='';
  channelName$!:Observable<string>;
  constructor(private store:Store<{counter:CounterState}>){}

  ngOnInit(){
// this.store.select(getChannelName).subscribe(channelName=>{
//   console.log('Channel name updated...');
//   this.channelName=channelName;
// })

this.channelName$=this.store.select(getChannelName);


  }

  addCounter(){
  console.log(this.value);
  this.store.dispatch(customIncrement({value:this.value}))
  }

  updateChannelName(){
    this.store.dispatch(updateChannelName());
  }

}
