import { Component, OnInit } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})

export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor() { }

  ngOnInit() {
  }

}
