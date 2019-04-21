import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceToolComponent } from './price-tool/price-tool.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatDialogModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ResultsComponent } from './results/results.component';
import { ProjectBuilderComponent } from './project-builder/project-builder.component';
import { ExampleDialog } from './example-dialog/example-dialog';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectSelectorComponent } from './project-selector/project-selector.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { OrderDialog } from './order-dialog/order-dialog';

@NgModule({
  declarations: [
    AppComponent,
    PriceToolComponent,
    HomeComponent,
    SurveyComponent,
    ResultsComponent,
    ExampleDialog,
    OrderDialog,
    ProjectBuilderComponent,
    AboutUsComponent,
    ProjectsComponent,
    ProjectSelectorComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  entryComponents: [
    ExampleDialog,
    OrderDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
