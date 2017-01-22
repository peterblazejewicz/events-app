import { Routes } from '@angular/router';
import { EventsListComponent, EventListResolver } from './events/index';

export const appRoutes: Routes = [
  {
    path: 'events', component: EventsListComponent, resolve: {
      events: EventListResolver
    }
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
];
