import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPerson} from "../../models/person";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{

constructor(private router: Router, private backend: BackendService) {}

  people$ = combineLatest([
    this.backend.testPersons$,
    this.backend.selectedPersonIdAction$,
  ]).pipe(
    map(([people, selectedId]) =>
      people.filter(person => person.storyId === selectedId)),
      tap(item => console.log("story person list",item)));

  person:IPerson|undefined;

  ngOnInit(): void {
    let pid = "";
    let plist:IPerson[]|undefined;
    let index = 0;
    this.backend.selectedPersonIdAction$.subscribe(item => pid = item);
    console.log("THis is the pid", pid);
    this.backend.testPersons$.subscribe(people => plist = people);
    index = plist.findIndex((person:IPerson) =>person.id === pid);
    this.person = plist[index];
    console.log("THis is the person: ", this.person);

  }

}
