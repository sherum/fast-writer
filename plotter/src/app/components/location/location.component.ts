import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILocation} from "../../models/location";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{


   constructor(private router: Router, private backend: BackendService) {
  }


  locations$ = combineLatest([
    this.backend.locations$,
    this.backend.selectedStoryIdAction$,
  ]).pipe(
    map(([locations, selectedId]) =>
      locations.filter(location => location.storyId === selectedId)),
      tap(item => console.log("story location list",item)));

  location:ILocation|undefined;


  ngOnInit(): void {
    let pid = "";
    let plist:ILocation[]|undefined;
    let index = 0;
    this.backend.selectedLocationIdAction$.subscribe(item => pid = item);
    console.log("THis is the pid", pid);
    this.backend.locations$.subscribe(locations => plist = locations);
    index = plist.findIndex((location:ILocation) =>location.id === pid);
    this.location = plist[index];
    console.log("THis is the location: ", this.location);

  }
}
