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
  // plots$ = combineLatest([
  //   this.backend.plots$,
  //   this.backend.selectedStoryIdAction$
  // ]).pipe(
  //   map(([plots, selectedId]) =>
  //     plots.filter(story => story.id === selectedId)
  //
  //   ));


  errorMessage="";
  @Input() story: IStory|undefined;
  @Output() storyEmitter: EventEmitter<IStory> = new EventEmitter<IStory>();
  @Output() editEmitter:EventEmitter<void> = new EventEmitter<void>();


  genre;

  constructor(private common: CommonService, private backend:BackendService) {
    this.genre = GENRE;
  }

  save(): void {
    let form = this.story;
    if(!form.id) {
      form.id = this.common.makeId(5);
    }
    this.storyEmitter.emit(form);
    this.working = newStory;
  }
  hideSummary():void{
    this.editEmitter.emit();
  }

}
