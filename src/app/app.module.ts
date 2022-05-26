import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ForloopComponent } from './forloop/forloop.component';
import { NestedloopComponent } from './nestedloop/nestedloop.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NgswitchComponent,
    ForloopComponent,
    NestedloopComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
