import { Component } from '@angular/core';
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {ILocation} from "../../models/location";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {IEvent} from "../../models/event";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
 constructor(private router:Router,private backend:BackendService) {
}
locationSelected:boolean = false;
selected:ILocation|undefined;
locations$ = combineLatest([
    this.backend.locations$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([locations, selectedId]) =>
      locations.filter(location => location.storyId === selectedId)
    ));

create():void{

}

select(id:string):void{

}

saveLocation(event:ILocation):void{

}

}
