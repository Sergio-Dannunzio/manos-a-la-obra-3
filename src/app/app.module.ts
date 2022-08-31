import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { TitleComponent } from './title/title.component';
import { HrComponent } from './hr/hr.component';

@NgModule({
  declarations: [
    AppComponent,
    InputButtonComponent,
    ListTaskComponent,
    TitleComponent,
    HrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
