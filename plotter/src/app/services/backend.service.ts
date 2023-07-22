import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../user/credentials";
import {IStory} from "../models/story";
import {filter, Observable, of, Subject, map, BehaviorSubject, merge, scan, tap} from "rxjs";
import {CommonService} from "./common.service";
import {
  newStory,
  testEvents,
  testLocations,
  testPersons,
  testPlots,
  testScenes,
  testStorys,
  testThings
} from "../data/sample.data";
import {IPerson} from "../models/person";
import {IEvent} from "../models/event";
import {ILocation} from "../models/location";
import {IPlot} from "../models/plot";
import {IThing} from "../models/thing";
import {IScene} from "../models/scene";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private selectedStoryId = new BehaviorSubject<string>("0");
  private selectedPlotId = new BehaviorSubject<string>("0");
  selectedStoryIdAction$: Observable<string> = this.selectedStoryId.asObservable();
  selectedPlotIdAction$: Observable<string> = this.selectedPlotId.asObservable();

  private selectedSceneId = new BehaviorSubject<string>("0");
  private selectedPersonId = new BehaviorSubject<string>("0");
  selectedSceneIdAction$: Observable<string> = this.selectedSceneId.asObservable();
  selectedPersonIdAction$: Observable<string> = this.selectedPersonId.asObservable();

  private selectedEventId = new BehaviorSubject<string>("0");
  private selectedLocationId = new BehaviorSubject<string>("0");
  selectedEventIdAction$: Observable<string> = this.selectedEventId.asObservable();
  selectedLocationIdAction$: Observable<string> = this.selectedLocationId.asObservable();

  private selectedThingId = new BehaviorSubject<string>("0");
  selectedThingIdAction$: Observable<string> = this.selectedThingId.asObservable();

  //***********************  stub code to simulate an http call*********
  stories$: Observable<IStory[]> = of(testStorys);
  events$: Observable<IEvent[]> = of(testEvents);
  locations$: Observable<ILocation[]> = of(testLocations);
  plots$: Observable<IPlot[]> = of(testPlots);
  things$: Observable<IThing[]> = of(testThings);
  testPersons$: Observable<IPerson[]> = of(testPersons);
  selectedStory$: Observable<string> = this.selectedStoryIdAction$;
  scenes$: Observable<IScene[]> = of(testScenes);

//*********************************************************************

  private storyInsertSubject = new Subject<IStory>();
  storyInsertAction$ = this.storyInsertSubject.asObservable();

   storiesWithAd$ = merge(
      this.stories$,
      this.storyInsertAction$
    ).pipe(
      tap(s => console.log("Tap that stories wiht ad: ",s)),
      scan((acc, value) => (value instanceof Array) ?
        [...value] : [...acc, value], [] as IStory[]),
    );


  addStory(newStory?: IStory) {
    let astory = newStory || this.fakeStory();
    console.log("a dummy story ", astory);
    this.storyInsertSubject.next(astory);
    this.onSelected(astory.id);
  }

  endpoint: string = 'http://localhost:8000';
  user_id: string = "2c7c309108b84b868c7608a6793d70b1";

  constructor(private http: HttpClient, private common: CommonService) {
  }

  onSelected(storyId: string): void {
    this.selectedStoryId.next(storyId);
  }

  onPlotSelected(plotId: string): void {
    this.selectedPlotId.next(plotId);
  }


  onSceneSelected(sceneId: string): void {
    this.selectedSceneId.next(sceneId);
  }

  onPersonSelected(personId: string): void {
    this.selectedPersonId.next(personId);
  }

  onEventSelected(eventId: string): void {
    this.selectedEventId.next(eventId);
  }

  onLocationSelected(locationId: string): void {
    this.selectedLocationId.next(locationId);
  }

  onThingSelected(thingId: string): void {
    this.selectedThingId.next(thingId);
  }

  getStories(): Observable<IStory[]> {
    return this.stories$;
    // let url = this.endpoint+'/stories';
    // return this.http.post<IStory[]>(url,{cred:this.credential});
  }

  // private getCredentials():ICredentials{
  //   return this.common.credentials;
  // }

  save(collection: string, data: IStory): void {
    let url = this.endpoint + "/save/" + collection;
    this.http.post<IStory>(url, {payload: data});
  }

  fakeStory():IStory {
   let story_new = newStory;
    story_new.id = this.common.makeId(5);
    story_new.title = "a new story"
    story_new.userId = "12344asnwdbc";
    return story_new;
  }


}
