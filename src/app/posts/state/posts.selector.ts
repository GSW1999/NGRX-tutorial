import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { PostsState } from "./posts.state";
import { Post } from "../../models/posts.model";

export const postsSelector=createFeatureSelector<PostsState>('posts');

export const getPosts=createSelector(postsSelector,state=>state.postsList);

export const getPostByID=createSelector(postsSelector,(state:any,props:any)=>{
    return state.postsList.find((post:Post)=>post.id===props.id);
})

