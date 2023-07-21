import {Component, Input, OnInit, Output} from '@angular/core';
import {IThing} from "../../models/thing";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, merge, Observable, of, scan, tap} from "rxjs";
import {IStory} from "../../models/story";


@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit{

  constructor(private router: Router, private backend: BackendService,private route:ActivatedRoute) {}

  things$ = combineLatest([
    this.backend.things$,
    this.backend.selectedThingIdAction$,
  ]).pipe(
    map(([things, selectedId]) =>
      things.filter(thing => thing.storyId === selectedId)),
    tap(item => console.log("story thing list", item)));

  thing: IThing | undefined;

  ngOnInit(): void {
    let pid = "";
    let plist: IThing[] | undefined;
    let index = 0;
    // this.backend.selectedThingIdAction$.subscribe(item => pid = item);
    // console.log("THis is the pid", pid);
    this.backend.things$.subscribe(things => plist = things);
    this.route.paramMap.subscribe(params => {
      pid = params.get('id');
      index = plist.findIndex((thing: IThing) => thing.id === pid);
      this.thing = plist[index];
      console.log("THis is the thing: ", this.thing);

    });
  }

  save(insertAction:IThing):void{
     console.log("Inserted Action: ", insertAction);
    let insertAction$: Observable<IThing> = of(insertAction);
    merge(
      this.things$,
      insertAction$,
    ).pipe(
      scan((acc, value) => (value instanceof Array) ?
        [...value] : [...acc, value], [] as IStory[]),
    );

    // TODO add a visual cue that save occurred
  }
  }
