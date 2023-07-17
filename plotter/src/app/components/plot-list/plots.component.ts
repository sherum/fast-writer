import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IThing} from "../../models/thing";
import {NgForm} from "@angular/forms";
import {IPlot} from "../../models/plot";
import {BackendService} from "../../services/backend.service";
import {combineLatest, map, tap} from "rxjs";

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit{

  ngOnInit(): void {
  this.backend.selectedStoryIdAction$.subscribe(action =>
    console.log("Selected Story: ",action));
  this.backend.selectedPlotIdAction$.subscribe(action =>
    console.log("Selected Plot: ",action))
  }

constructor(private router:Router,private backend:BackendService) {
}
plotSelected:boolean = false;
selected:IPlot|undefined;
plots$ = combineLatest([
    this.backend.plots$,
    this.backend.selectedStoryIdAction$,
  ]).pipe(
    map(([plots, selectedId]) =>
      plots.filter(plot => plot.storyId === selectedId)),
      tap(item => console.log("plot list",item)));


create():void{

}

selectedPlot(id:string):void{
  this.backend.onPlotSelected(id);
  this.router.navigate([{outlets:{details:['plot',id]}}]);

}

savePlot(event:IPlot):void{

}


}
