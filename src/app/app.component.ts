import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { AppendPipe } from './Pipes/append.pipe';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form:any;
  constructor(private formBuilder: FormBuilder ){
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.form.value);
    
  }

  getValue(full:any){
    console.log(full);
    
  }
}
