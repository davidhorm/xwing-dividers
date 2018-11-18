import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DividerComponent } from './divider/divider.component';
import { GearboxComponent } from './gearbox/gearbox.component';
import { SideComponent } from './gearbox/side/side.component';
import { FrontBackComponent } from './gearbox/front-back/front-back.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DividerComponent,
    GearboxComponent,
    SideComponent,
    FrontBackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
