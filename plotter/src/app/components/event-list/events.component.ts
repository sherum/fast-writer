import { Component } from '@angular/core';
import {EventList, IEvent} from "../../models/event";
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {IPlot} from "../../models/plot";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private router:Router,private backend:BackendService) {
}
eventSelected:boolean = false;
selected:IEvent|undefined;
event$ = combineLatest([
    this.backend.events$,
    this.backend.selectedIdAction$
  ]).pipe(
    map(([events, selectedId]) =>
      events.filter(event => event.storyId === selectedId)
    ));


create():void{

}

select(id:string):void{

}

saveEvent(event:IEvent):void{

}


}
