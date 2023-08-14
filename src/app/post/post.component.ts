import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() fromParent: String; 

  postParentMessage: String = 'Post Parent Message'

  childMessage : String = "Some message from child";
  outputChildMessage = "Message from child via @Output"

  @Output() messageEvent: any = new EventEmitter <String>();

    constructor(){

    }

  ngOnInit(){

  }

  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
    
  }
  


}
