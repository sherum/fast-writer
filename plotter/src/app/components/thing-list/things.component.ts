import {Component} from '@angular/core';
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {ILocation} from "../../models/location";
import {combineLatest, map} from "rxjs";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";


@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent {
  constructor(private router:Router,private backend:BackendService) {}
  thingSelected:boolean = false;
selected:ILocation|undefined;
things$ = combineLatest([
    this.backend.things$,
    this.backend.selectedIdAction$
  ]).pipe(
    map(([things, selectedId]) =>
      things.filter(thing => thing.storyId === selectedId)
    ));

  create(): void {

  }

  select(id: string): void {

  }

  saveThing(thing:IThing): void {

  }
}
