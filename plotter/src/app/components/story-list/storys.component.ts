import {Component} from '@angular/core';
import {IStory} from "../../models/story";
import {BackendService} from "../../services/backend.service";
import {ICredentials} from "../../user/credentials";
import {testStorys, newStory} from "../../data/sample.data";
import {catchError, combineLatest, EMPTY, Observable, map, merge,scan,of,tap} from "rxjs";
import {CommonService} from "../../services/common.service";


@Component({
  selector: 'app-storys',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StorysComponent {

  constructor(private backend: BackendService, private common: CommonService) {
  }

  errorMessage = ""
  stories$ = this.backend.stories$.pipe(
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
      storys.filter(story => story.id === selectedId)[0]
    ));

  select(sid: string): void {
    this.backend.onSelected(sid);
  }

  saveStory(insertAction: IStory): void {

    console.log("Inserted Action: ",insertAction);
    let insertAction$: Observable<IStory> = of(insertAction);
    merge(
      this.stories$,
      insertAction$,
    ).pipe(
           scan((acc, value) => (value instanceof Array) ?
        [...value] : [...acc, value], [] as IStory[]),


    );
  }

  create() {
    this.saveStory(newStory);

  }

  // saveStory(event:IStory){
  //   this.backend.save("stories",event);
  // }

}
