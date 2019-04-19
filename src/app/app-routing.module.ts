import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceToolComponent } from './price-tool/price-tool.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { ResultsComponent } from './results/results.component';
import { ProjectBuilderComponent } from './project-builder/project-builder.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSelectorComponent } from './project-selector/project-selector.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'pricingtool', component: PriceToolComponent },
  { path: 'pricetool', component: PriceToolComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projectselector', component: ProjectSelectorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projectbuilder/:id', component: ProjectBuilderComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
