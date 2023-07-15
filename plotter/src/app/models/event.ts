export interface IEvent {
  id:string;
  storyId:string
  name:string;
  description:string;
  date?:Date;
  location?:string; //location ID
}

export class EventList{
  id:string|undefined;
  storyId:string|undefined;
  events:Array<Event>|undefined;

  constructor(){
    this.events=new Array<Event>();
  }

}
