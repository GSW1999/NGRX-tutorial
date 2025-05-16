import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnDestroy{
  // @Input() counter:any;
  // counter:number=0;
  // counterSubscription:Subscription=new Subscription();
  counter$!:Observable<CounterState>;
  constructor(private store:Store<{counter:CounterState}>){}
  
  ngOnInit() {
    // this.counterSubscription=this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // })
    this.counter$=this.store.select('counter');
  }

  ngOnDestroy(){
  //   this.counterSubscription.unsubscribe();
  }


}
