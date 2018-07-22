import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'



import { AppComponent } from './app.component';
import { CustomPipe } from './Pipes/custom-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
 
  providers: [CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
