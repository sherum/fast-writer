import {Component} from '@angular/core';
import {ILocation} from "../../models/location";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

  constructor(private router: Router, private backend: BackendService) {
  }


  selected: ILocation | undefined;
  locations$ = combineLatest([
    this.backend.locations$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([locations, selectedId]) =>
      locations.filter(location => location.storyId === selectedId)),
    tap(item => console.log("story locations list", item)));

  create(): void {

  }

  select(id: string): void {
    this.router.navigate([{outlets: {single: null}}]);

    this.backend.onLocationSelected(id);
    this.router.navigate([{outlets: {single: ['location', id]}}]);
  }

  saveLocation(event: ILocation): void {

  }

}
