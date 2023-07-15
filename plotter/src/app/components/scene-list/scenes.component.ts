import {Component} from '@angular/core';
import {IScene} from "../../models/scene";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {ILocation} from "../../models/location";
import {combineLatest, map} from "rxjs";


@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.css']
})
export class ScenesComponent {
  constructor(private router:Router,private backend:BackendService) {
}
sceneSelected:boolean = false;
selected:IScene|undefined;
scenes$ = combineLatest([
    this.backend.scenes$,
    this.backend.selectedIdAction$
  ]).pipe(
    map(([scenes, selectedId]) =>
      scenes.filter(scene => scene.storyId === selectedId)
    ));

create():void{

}

select(id:string):void{

}

saveScene(event:IScene):void{

}
}
