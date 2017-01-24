import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import './rxjs-extensions';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventService,
  EventInMemoryService,
  EventDetailsComponent,
  EventResolver
} from './events/';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    }),
    InMemoryWebApiModule.forRoot(EventInMemoryService, {
      delay: 1000
    })
  ],
  providers: [
    EventService,
    EventListResolver,
    EventResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
