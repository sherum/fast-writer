import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILocation} from "../../models/location";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, merge, Observable, of, scan, tap} from "rxjs";
import {IThing} from "../../models/thing";
import {IStory} from "../../models/story";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{


  constructor(private router: Router, private backend: BackendService, private route: ActivatedRoute) {
  }


  locations$ = combineLatest([
    this.backend.locations$,
    this.backend.selectedStoryIdAction$,
  ]).pipe(
    map(([locations, selectedId]) =>
      locations.filter(location => location.storyId === selectedId)),
    tap(item => console.log("story location list", item)));

  location: ILocation | undefined;


  ngOnInit(): void {
    let pid = "";
    let plist: ILocation[] | undefined;
    let index = 0;
    // this.backend.selectedLocationIdAction$.subscribe(item => pid = item);
    // console.log("THis is the pid", pid);
    this.backend.locations$.subscribe(locations => plist = locations);
    this.route.paramMap.subscribe(params => {
      pid = params.get('id');
      index = plist.findIndex((location: ILocation) => location.id === pid);
      this.location = plist[index];
      console.log("THis is the location: ", this.location);

    });
  }

  save(insertAction:ILocation):void{
     console.log("Inserted Action: ", insertAction);
    let insertAction$: Observable<IThing> = of(insertAction);
    merge(
      this.locations$,
      insertAction$,
    ).pipe(
      scan((acc, value) => (value instanceof Array) ?
        [...value] : [...acc, value], [] as IStory[]),
    );

    // TODO add a visual cue that save occurred
  }
  }
