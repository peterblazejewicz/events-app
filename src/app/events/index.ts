import { EventResolver } from './shared/event-resolver.service';
import { EventService } from './shared/event.service';
import { EventListResolver } from './list/event-list-resolver.service';
import { EventsListComponent } from './list/events-list.component';
import { EventThumbnailComponent } from './thumbnail/event-thumbnail.component';
import { IEvent, ILocation, ISession } from './shared/event.model';
import { EventInMemoryService } from './shared/event-in-memory.service';
import { EventDetailsComponent } from './details/event-details.component';
export {
  EventsListComponent,
  EventThumbnailComponent,
  IEvent,
  ILocation,
  ISession,
  EventListResolver,
  EventService,
  EventInMemoryService,
  EventDetailsComponent,
  EventResolver
}
