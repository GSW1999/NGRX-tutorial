import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const counterSelector=createFeatureSelector<CounterState>('counter');

export const getCounter=createSelector(counterSelector,state=>state.counter);
export const getChannelName=createSelector(counterSelector,state=>state.channelName);