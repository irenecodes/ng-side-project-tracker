import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { IdeasService } from './shared/services/ideas.service';
import { IdeasListComponent } from './ideas-list/ideas-list.component';

@NgModule({
  declarations: [
    AppComponent,   
    IdeasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ IdeasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
