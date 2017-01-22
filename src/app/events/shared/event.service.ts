import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { IEvent, ISession } from './event.model';

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get('/api/events').map((response: Response) => {
      return <IEvent[]>response.json();
    }).catch(this.handleError);
  }

  getEvent(id: number): Observable<IEvent> {
    return this.http.get('/api/events/' + id).map((response: Response) => {
      return <IEvent>response.json();
    }).catch(this.handleError);
  }

  saveEvent(event): Observable<IEvent> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post('/api/events', JSON.stringify(event), options).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  searchSessions(searchTerm: string) {
    return this.http.get('/api/sessions/search?search=' + searchTerm).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
