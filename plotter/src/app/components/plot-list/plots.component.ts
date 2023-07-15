import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {IPlot} from "../../models/plot";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map} from "rxjs";

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit{
  ngOnInit(): void {
  this.backend.selectedIdAction$.subscribe(action =>
    console.log("Selected Acton: ",action))
  }

constructor(private router:Router,private backend:BackendService) {
}
plotSelected:boolean = false;
selected:IPlot|undefined;
plots$ = combineLatest([
    this.backend.plots$,
    this.backend.selectedIdAction$
  ]).pipe(
    map(([plots, selectedId]) =>
      plots.filter(plot => plot.storyId === selectedId)
    ));

create():void{

}

select(id:string):void{

}

savePlot(event:IPlot):void{

}


}
