import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { AppendPipe } from './Pipes/append.pipe';
import { StringPipePipe } from './Pipes/string-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostComponent,
    PostListComponent,
    AppendPipe,
    StringPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
