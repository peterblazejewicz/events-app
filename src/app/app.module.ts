import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import './rxjs-extensions';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { EventsListComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventService } from './events/';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [
    EventService,
    EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
