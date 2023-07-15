import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IScene} from "../../models/scene";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {ILocation} from "../../models/location";
import {combineLatest, map} from "rxjs";
import {IPerson} from "../../models/person";
import {IPlot} from "../../models/plot";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  constructor(private router: Router, private backend: BackendService) {
  }

  @Input() scene: IScene|undefined;
  @Output() sceneEmitter: EventEmitter<IScene> = new EventEmitter<IScene>();

  create(): void {

  }

  select(id: string): void {

  }

  saveScene(event: IScene): void {

  }

}
