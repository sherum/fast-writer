import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ILocation} from "../../models/location";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
@Input() location:ILocation|undefined;
@Output() locationEmitter:EventEmitter<ILocation> = new EventEmitter<ILocation>();

}
