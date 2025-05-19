import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { PostsState } from "./posts.state";

export const postsSelector=createFeatureSelector<PostsState>('posts');

export const getPosts=createSelector(postsSelector,state=>state.postsList);

