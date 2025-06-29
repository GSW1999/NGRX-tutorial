import { createAction, props } from "@ngrx/store";
import {Post} from '../../models/posts.model'

export const addPost=createAction('add post',props<{post:Post}>())
export const editPost=createAction('edit post',props<{post:Post}>());
export const deletePost=createAction('delete post',props<{postId:string}>());