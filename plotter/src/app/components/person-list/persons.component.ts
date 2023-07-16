import { Component } from '@angular/core';
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {IPerson} from "../../models/person";
import {ILocation} from "../../models/location";
import {combineLatest, map} from "rxjs";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-people',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  constructor(private router:Router,private backend:BackendService) {
}
personSelected:boolean = false;
selected:ILocation|undefined;
people$ = combineLatest([
    this.backend.testPersons$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([people, selectedId]) =>
      people.filter(person => person.storyId === selectedId)
    ));

create():void{

}

select(id:string):void{

}

savePerson(event:IPerson):void{

}
}
