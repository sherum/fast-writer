import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEvent} from "../../models/event";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";
import {IPerson} from "../../models/person";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router: Router, private backend: BackendService, private route: ActivatedRoute) {
  }

  people$ = combineLatest([
    this.backend.events$,
    this.backend.selectedEventIdAction$,
  ]).pipe(
    map(([events, selectedId]) =>
      events.filter(event => event.storyId === selectedId)),
    tap(item => console.log("story event list", item)));

  event: IEvent | undefined;

  ngOnInit(): void {
    let pid = "";
    let plist: IEvent[] | undefined;
    let index = 0;
    // this.backend.selectedEventIdAction$.subscribe(item => pid = item);
    // console.log("THis is the pid", pid);
    this.backend.events$.subscribe(events => plist = events);
    this.route.paramMap.subscribe(params => {
      pid = params.get('id');
      index = plist.findIndex((event: IEvent) => event.id === pid);
      this.event = plist[index];
      console.log("THis is the event: ", this.event);

    });


  }
}
