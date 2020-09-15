import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeService } from './services/practice.service';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
