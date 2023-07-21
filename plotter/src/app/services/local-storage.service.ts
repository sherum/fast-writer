import { Injectable } from '@angular/core';
import {
  testEvents,
  testLocations,
  testPersons,
  testPlots,
  testScenes,
  testStorys,
  testThings
}  from "../data/sample.data" ;

import {HttpClient} from "@angular/common/http";
import {Observable, from} from "rxjs";
import {IStory} from "../models/story";
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storydata = testStorys;

  save(key, value){
    localStorage.setItem(key,JSON.stringify(value));
    this.callStories();
  }

  load(key: string):any{
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  clear():void{
    localStorage.clear();
  }


  callStories():void {
   this.storydata = this.load('stories');

}

  initialLoad():void{
    this.save("stories",testStorys);
    this.save("plots",testPlots);
    this.save("events",testEvents);
    this.save("locations",testLocations);
    this.save("people",testPersons);
    this.save("things",testThings);
    this.save("scenes",testScenes);
  }

}
