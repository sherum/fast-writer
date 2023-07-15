import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from "../../models/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
@Input() event:IEvent|undefined;
@Output() eventEmitter:EventEmitter<IEvent> = new EventEmitter<IEvent>();

}
