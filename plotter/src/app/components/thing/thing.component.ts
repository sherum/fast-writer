import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IThing} from "../../models/thing";


@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent {
@Input() thing:IThing|undefined;
@Output() thingEmitter:EventEmitter<IThing> = new EventEmitter<IThing>();

}
