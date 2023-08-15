import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  address: string;
  
  objArray : Array<any> = [];

  addNew(){
    if(this.name && this.email && this.address){
      this.objArray.push({name: this.name, email: this.email, address: this.address});
    this.name='';
    this.email='';
    this.address='';
    }else{
      alert("Enter details first")
    }
    
  }

  delete(post: any){
    // let index = this.objArray.indexOf(post)
    this.objArray.splice(post,1);
  }

}
