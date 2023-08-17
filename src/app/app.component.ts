import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { AppendPipe } from './Pipes/append.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular Course";
  number = 1234567.89123;
  price = 99.9;
  today: Date = new Date();
  postObject = {
    id: 1,
    postTitle: "post 1"
  }
  postArray = ['post 1', 'post 2', 'post 3', 'post 4']
  userDetails = {
    name: 'user1',
    city: 'bengaluru',
    country:'ind'

  }
  dummyText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae mollitia aperiam placeat accusantium explicabo nesciunt voluptatibus eveniet quod debitis! Cupiditate laborum eligendi voluptatibus nostrum dignissimos dolores tempore recusandae ab? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo beatae mollitia aperiam placeat accusantium explicabo nesciunt voluptatibus eveniet quod debitis! Cupiditate laborum eligendi voluptatibus nostrum dignissimos dolores tempore recusandae ab?" 
}
