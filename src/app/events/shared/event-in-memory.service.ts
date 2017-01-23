import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EVENTS } from '../../../data/event.seed';

@Injectable()
export class EventInMemoryService implements InMemoryDbService {

  createDb() {
    return {
      events: EVENTS
    };
  }

}
