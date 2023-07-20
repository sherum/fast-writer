import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPerson} from "../../models/person";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 isOneShot = false;
  constructor(private router: Router, private backend: BackendService, private route: ActivatedRoute) {
  }

  people$ = combineLatest([
    this.backend.testPersons$,
    this.backend.selectedPersonIdAction$,
  ]).pipe(
    map(([people, selectedId]) =>
      people.filter(person => person.storyId === selectedId)),
    tap(item => console.log("story person list", item)));

  person: IPerson | undefined;

  ngOnInit(): void {
    let pid = "";
    let plist: IPerson[] | undefined;
    let index = 0;
    // this.backend.selectedPersonIdAction$.subscribe(item => pid = item);
    // console.log("THis is the pid", pid);
    this.backend.testPersons$.subscribe(people => plist = people);
    this.route.paramMap.subscribe(params => {
      pid = params.get('id');
      index = plist.findIndex((person: IPerson) => person.id === pid);
      this.person = plist[index];
      console.log("THis is the person: ", this.person);

    });
  }
  flip():void{
    if (this.person.role == 'oneshot'){
      this.isOneShot = true;
    }else{
      this.isOneShot = false;
    }
  }

}
