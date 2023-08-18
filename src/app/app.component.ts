import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { AppendPipe } from './Pipes/append.pipe';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSubmit(data:NgForm){
    console.log(data.value);
    
  }

  getValue(full:any){
    console.log(full);
    
  }
}
