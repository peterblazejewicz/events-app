/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventInMemoryService } from './event-in-memory.service';

describe('EventInMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventInMemoryService]
    });
  });

  it('should ...', inject([EventInMemoryService], (service: EventInMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
