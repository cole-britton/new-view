import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceToolComponent } from './price-tool/price-tool.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceToolComponent,
    HomeComponent,
    SurveyComponent
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
