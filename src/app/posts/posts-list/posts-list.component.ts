import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts.model';
import { PostsState } from '../state/posts.state';
import { getPosts } from '../state/posts.selector';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  standalone: false,
  templateUrl: './posts-list.component.html',
  styles: ``
})
export class PostsListComponent {
  postsList$!:Observable<Post[]>;
  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.postsList$=this.store.select(getPosts);
  }
  deletePost(id:any){
    if(confirm('Are you sure want to delete the post?')){
      this.store.dispatch(deletePost({postId:id}))
    }
  }

}
