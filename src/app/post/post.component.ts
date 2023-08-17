import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  postList: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.postList = postService.post;
  }

  addNew(){
    let newPost: Post = {id: 8, postTitle: 'Post 8'};    
    this.postService.addPost(newPost);
  }
  


}
