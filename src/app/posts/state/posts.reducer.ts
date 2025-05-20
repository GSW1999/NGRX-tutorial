import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addPost, deletePost, editPost } from "./posts.actions";

const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {

        let post = { ...action.post };
        post.id = (state.postsList.length + 1).toString();
        return { ...state, postsList: [...state.postsList, post] }
    }),
    on(editPost, (state, action) => {
        console.log(action);
        const updatedState = state.postsList.map((post)=>{
            return post.id == action.post.id ? action.post : post
        })
        return { ...state, postsList: updatedState }
    }),
    on(deletePost,(state,action)=>{
        const updatedState=state.postsList.filter((post)=>post.id!==action.postId);
        return {...state,postsList:updatedState};
    })
);

export function postsReducer(state: any, action: any) {
    return _postReducer(state, action)
}