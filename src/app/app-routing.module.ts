import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceToolComponent } from './price-tool/price-tool.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'pricingtool', component: PriceToolComponent },
  { path: 'pricetool', component: PriceToolComponent },
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
