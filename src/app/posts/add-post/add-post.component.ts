import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/posts.model';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-add-post',
  standalone: false,
  templateUrl: './add-post.component.html',
  styles: ``
})
export class AddPostComponent {
  constructor(private store:Store<AppState>){}

  postForm!: FormGroup;

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  addPost() {
    const post:Post={
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }
    this.store.dispatch(addPost({post}))
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
