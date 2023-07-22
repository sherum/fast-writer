import {Component} from '@angular/core';
import {IStory} from "../../models/story";
import {BackendService} from "../../services/backend.service";
import {ICredentials} from "../../user/credentials";
import {testStorys, newStory} from "../../data/sample.data";
import {catchError, combineLatest, EMPTY, Observable, map, merge, scan, of, tap} from "rxjs";
import {CommonService} from "../../services/common.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";


@Component({
  selector: 'app-storys',
  templateUrl: './storys.component.html',
  styleUrls: ['./storys.component.css']
})
export class StorysComponent {


  errorMessage = ""

  stories$ = this.backend.storiesWithAd$.pipe(
    catchError(err => {   //an arrow function followed by { implies a function
      this.errorMessage = err;    //to signify an object literal => ({ }) surround the braces with parens
      return EMPTY
    })
  );

  activeStory$: Observable<IStory> = combineLatest([
    this.backend.stories$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([storys, selectedId]) =>
        storys.filter(story => story.id === selectedId)[0],
      tap(story => console.log("Active Story  and edit flag", story, this.edit))
    ));

  constructor(private backend: BackendService, private common: CommonService, private router: Router) {}

  edit = false;

  displayDetail(): void {
      this.router.navigate([{outlets: {details: ['story-details']}}]);
      this.edit = true;
  }


  hideDetail():void{
    this.router.navigateByUrl('/storys');
    this.edit = false;
  }

  select(sid: string): void {
   this.backend.onSelected(sid);
  }

  // saveStory(insertAction: IStory): void {
  //
  //   console.log("Inserted Action: ", insertAction);
  //   let insertAction$: Observable<IStory> = of(insertAction);
  //   merge(
  //     this.stories$,
  //     insertAction$,
  //   ).pipe(
  //     scan((acc, value) => (value instanceof Array) ?
  //       [...value] : [...acc, value], [] as IStory[]),
  //   );
  // }


  saveStory(story?:IStory):void{
    this.backend.addStory(story);
  }
  create() {
   this.backend.addStory();

  }




}
