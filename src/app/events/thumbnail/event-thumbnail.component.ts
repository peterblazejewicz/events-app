import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

}
