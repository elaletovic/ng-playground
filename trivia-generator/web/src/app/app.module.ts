import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneratorComponent } from './generator/generator.component';
import { GeneratorFormComponent } from './generator/generator-form/generator-form.component';
import { GeneratorResultsComponent } from './generator/generator-results/generator-results.component';

import { QuestionGeneratorService } from './generator/generator-form/question-generator.service';

import { Lookup } from './models/lookup.model';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'generator', component: GeneratorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratorComponent,
    GeneratorFormComponent,
    GeneratorResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: QuestionGeneratorService, useClass: QuestionGeneratorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
