import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IStory} from "../../models/story";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {EventComponent} from "../event/event.component";

@Component({
  selector: 'app-story-summary',
  templateUrl: './story-summary.component.html',
  styleUrls: ['./story-summary.component.css']
})
export class StorySummaryComponent {
  @Input() story:IStory|undefined;
  @Output() editStory:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private route:Router) { }

  edit():void {
    console.log("Clicked that display toggle")
    this.editStory.emit(true);
  }

}
