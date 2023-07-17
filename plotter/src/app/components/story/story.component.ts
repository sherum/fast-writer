import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GENRE, IStory} from "../../models/story";
import {NgForm} from "@angular/forms";
import {newStory} from "../../data/sample.data";
import {CommonService} from "../../services/common.service";
import {BackendService} from "../../services/backend.service";
import {catchError, combineLatest, EMPTY, Observable, map, merge,scan,of,tap,count} from "rxjs";


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
  working = newStory;
  plots$ = combineLatest([
    this.backend.plots$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([plots, selectedId]) =>
      plots.filter(story => story.id === selectedId)

    ));




  // scenes$= this.backend.plots$.pipe(
  //  catchError(err => {   //an arrow function followed by { implies a function
  //     this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
  //     return EMPTY
  //   })
  // );
  // people$ = this.backend.testPersons$.pipe(
  //  catchError(err => {   //an arrow function followed by { implies a function
  //     this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
  //     return EMPTY
  //   })
  // );
  // events$ = this.backend.events$.pipe(
  //  catchError(err => {   //an arrow function followed by { implies a function
  //     this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
  //     return EMPTY
  //   })
  // );
  // locations$ = this.backend.locations$.pipe(
  //  catchError(err => {   //an arrow function followed by { implies a function
  //     this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
  //     return EMPTY
  //   })
  // );
  // things$ = this.backend.things$.pipe(
  //   filter(data => data.id)
  //  catchError(err => {   //an arrow function followed by { implies a function
  //     this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
  //     return EMPTY
  //   })
  // );

  errorMessage="";
  @Input() story: IStory = this.working;
  @Output() storyEmitter: EventEmitter<IStory> = new EventEmitter<IStory>();
  plotCount:number =0

  genre;

  constructor(private common: CommonService, private backend:BackendService) {
// this.story = {author: "", genre: "", id: "", maguffin: "", title: "", summary: "", userId: ""};
    this.genre = GENRE;
  }

  save(form: IStory): void {
    form.id = this.common.makeId(5);
    this.storyEmitter.emit(form);
    this.working = newStory;
  }

}
