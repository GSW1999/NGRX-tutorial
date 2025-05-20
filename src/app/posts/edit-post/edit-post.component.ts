import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsState } from '../state/posts.state';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getPostByID } from '../state/posts.selector';
import { Post } from '../../models/posts.model';
import { AppState } from '../../store/app.state';
import { editPost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  standalone: false,
  templateUrl: './edit-post.component.html',
  styles: ``
})
export class EditPostComponent implements OnDestroy {

  postForm: FormGroup;
  postSubscription!: Subscription;
  postId!:string|null;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      this.postSubscription = this.store.select(getPostByID, { id: this.postId }).subscribe((post) => {
        this.postForm.patchValue({title: post.title, description: post.description })
      })
    })

  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  updatePost() {
    console.log(this.postForm.value);
    this.store.dispatch(editPost({post: { id:this.postId||undefined,title: this.postForm.value.title, description: this.postForm.value.description } }))

  }

  getDescriptionErrorMessage() {
    if (this.postForm.get('description')?.errors?.['required']) {
      return "Description is required."
    }
    else if (this.postForm.get('description')?.errors?.['minlength']) {
      return "Description shouldn't be more than 6 characters."
    }
    return '';
  }

}
