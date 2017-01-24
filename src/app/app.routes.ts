import { Routes } from '@angular/router';
import { EventsListComponent, EventListResolver, EventDetailsComponent, EventResolver } from './events/';

export const appRoutes: Routes = [
  {
    path: 'events', component: EventsListComponent, resolve: {
      events: EventListResolver
    }
  },
  {
    path: 'events/:id', component: EventDetailsComponent, resolve: {
      event: EventResolver
    }
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
];
