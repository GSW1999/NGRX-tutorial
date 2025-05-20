import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomIncrementCounterComponent } from './custom-increment-counter/custom-increment-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';


const routes: Routes = [
  { path: '', component: CounterComponent }
]

@NgModule({
  declarations: [CounterComponent, CounterOutputComponent, CounterButtonsComponent, CustomIncrementCounterComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),StoreModule.forFeature('counter',counterReducer)
  ]
})
export class CounterModule { }
