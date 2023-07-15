import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICredentials} from "../user/credentials";
import {IStory} from "../models/story";
import {filter, Observable, of, Subject, map, BehaviorSubject} from "rxjs";
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
  selectedIdAction$:Observable<string> = this.selectedStoryId.asObservable();
  //***********************  stub code to simulate an http call*********
  stories$:Observable<IStory[]> = of(testStorys);
  events$:Observable<IEvent[]> = of(testEvents);
  locations$:Observable<ILocation[]> = of(testLocations);
  plots$:Observable<IPlot[]> = of(testPlots);
  things$:Observable<IThing[]> = of(testThings);
  testPersons$:Observable<IPerson[]> = of(testPersons);
  selectedStory$:Observable<string> = this.selectedIdAction$;
  scenes$:Observable<IScene[]> = of(testScenes);


//*********************************************************************




  endpoint:string = 'http://localhost:8000';
  user_id:string ="2c7c309108b84b868c7608a6793d70b1";

  constructor(private http:HttpClient,private common:CommonService){}

  onSelected(storyId:string):void{
    this.selectedStoryId.next(storyId);
  }

  getStories():Observable<IStory[]>{
    return this.stories$;
    // let url = this.endpoint+'/stories';
    // return this.http.post<IStory[]>(url,{cred:this.credential});
  }
  // private getCredentials():ICredentials{
  //   return this.common.credentials;
  // }

  save(collection:string,data:IStory):void{
    let url = this.endpoint+"/save/"+collection;
    this.http.post<IStory>(url,{payload:data});
  }


  activeStory$(id:string):Observable<IStory[]> {
   return this.stories$.pipe(
      map(stories => stories.filter(story  => id ? id == story.id:null))
    );

  }
}
