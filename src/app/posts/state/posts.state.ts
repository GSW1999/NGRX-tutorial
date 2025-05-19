import { Post } from "../../models/posts.model"

export interface PostsState{
    postsList:Post[]
}

export const initialState:PostsState={
    postsList:[
        {id:'1', title:'Post Title 1',description:'Post Description 1'},
        {id:'2', title:'Post Title 2',description:'Post Description 2'}
    ]
}