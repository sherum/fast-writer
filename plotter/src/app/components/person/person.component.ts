import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPerson} from "../../models/person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
@Input() person:IPerson|undefined;
@Output() personEmitter:EventEmitter<IPerson> = new EventEmitter<IPerson>();

}
