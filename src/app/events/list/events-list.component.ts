import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'].data;
  }

}
