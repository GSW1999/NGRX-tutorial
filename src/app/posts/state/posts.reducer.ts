import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost } from "./posts.actions";

const _postReducer=createReducer(initialState,
    on(addPost,(state,action)=>{

        let post ={...action.post};
        post.id=(state.postsList.length+1).toString();
        return {...state,postsList:[...state.postsList,post]}
    })
);

export function postsReducer(state:any,action:any){
    return _postReducer(state,action)
}