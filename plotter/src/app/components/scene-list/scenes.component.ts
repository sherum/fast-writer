import {Component, OnInit} from '@angular/core';
import {IScene} from "../../models/scene";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, Observable} from "rxjs";
import {testScenes} from "../../data/sample.data";


@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent {
  constructor(private router: Router, private backend: BackendService) {
  }


  selected: IScene | undefined;
  scenes$: Observable<IScene[]> = combineLatest([
    this.backend.scenes$,
    this.backend.selectedStoryIdAction$
  ]).pipe(
    map(([scenes, selectedId]) =>
      scenes.filter(scene => scene.storyId === selectedId)
    ));

  create(): void {

  }

  select(id: string): void {
    this.router.navigate([{outlets: {single: null}}]);
    this.backend.onSceneSelected(id);
   this.router.navigate([{outlets:{single:['scene',id]}}]);
  }

// saveScene(event:IScene):void{
//
// }
}
