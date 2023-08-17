import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list1',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent1 {
  @Input() postParent: String;

}
