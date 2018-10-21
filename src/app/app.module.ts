import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
