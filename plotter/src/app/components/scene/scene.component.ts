import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IScene} from "../../models/scene";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {ILocation} from "../../models/location";
import {combineLatest, map, tap} from "rxjs";
import {IPerson} from "../../models/person";
import {IPlot, PLOTTYPE} from "../../models/plot";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  constructor(private router: Router, private backend: BackendService,private route:ActivatedRoute) {
  }


  scenes$ = combineLatest([
    this.backend.scenes$,
    this.backend.selectedStoryIdAction$,
  ]).pipe(
    map(([scenes, selectedId]) =>
      scenes.filter(scene => scene.storyId === selectedId)),
    tap(item => console.log("story scene list", item)));

  scene: IScene | undefined;

  ngOnInit(): void {
    let pid = "";
    let plist: IScene[] | undefined;
    let index = 0;
    // this.backend.selectedSceneIdAction$.subscribe(item => pid = item);
    // console.log("THis is the pid", pid);
    this.backend.scenes$.subscribe(plots => plist = plots);
    this.route.paramMap.subscribe(params => {
      pid = params.get('id');
      index = plist.findIndex((scene: IScene) => scene.id === pid);
      this.scene = plist[index];
      console.log("THis is the plot: ", this.scene);

    });
  }

    create()
  :
    void {}

    select(id
  :
    string
  ):
    void {}

    saveScene(event
  :
    IScene
  ):
    void {}

  }
