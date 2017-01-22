/**
 * @export
 * @interface IEvent
 */
export interface IEvent {
  id: number;
  date: Date;
  imageUrl: string;
  location?: ILocation;
  name: string;
  onlineUrl?: string;
  price: number;
  sessions: ISession[];
  time: string;
}

/**
 * @export
 * @interface ISession
 */
export interface ISession {
  id: number;
  abstract: string;
  duration: number;
  level: string;
  name: string;
  presenter: string;
  voters: string[];
}


/**
 * @export
 * @interface ILocation
 */
export interface ILocation {
  address: string;
  city: string;
  country: string;
}
