import {Component} from '@angular/core';
import {IEvent} from "../../models/event";

import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private router: Router, private backend: BackendService) {
  }

  events$ = combineLatest([
    this.backend.events$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([events, selectedId]) =>
      events.filter(event => event.storyId === selectedId)
    ));


  create(): void {

  }

  select(id: string): void {
     this.router.navigate([{outlets:{single:null}}]);
    this.backend.onEventSelected(id);
   this.router.navigate([{outlets:{single:['event',id]}}]);
  }

  saveEvent(event: IEvent): void {

  }


}
