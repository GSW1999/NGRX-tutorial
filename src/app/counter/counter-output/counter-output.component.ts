import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: false,
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
  // @Input() counter:any;
  counter:number=0;
  constructor(private store:Store<{counter:{counter:number}}>){}
  
  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    })
  }


}
