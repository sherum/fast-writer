import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {IPlot, PLOTTYPE} from "../../models/plot";
import {combineLatest, filter, map, Observable, take, tap} from "rxjs";
import {BackendService} from "../../services/backend.service";
import {testPlots} from "../../data/sample.data";



@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements  OnInit{
  plotTypes = PLOTTYPE;
  // plotId = "";
  plots$ = combineLatest([
    this.backend.plots$,
    this.backend.selectedStoryIdAction$,
  ]).pipe(
    map(([plots, selectedId]) =>
      plots.filter(plot => plot.storyId === selectedId)),
      tap(item => console.log("story plot list",item)));
  plot:IPlot|undefined;

  // plot$:Observable<IPlot[]|IPlot|undefined>;
  //   =combineLatest([
  //   this.storyPlots$,
  //   this.backend.selectedPlotIdAction$
  // ])
  //   .pipe(
  //     map(([plots, selectedId]) =>
  //       plots.filter(plot => plot.id === selectedId)),
  //     tap(item => console.log("Tapped Plot", item))
  //     );
  ngOnInit(): void {
    let pid = "";
    let plist:IPlot[]|undefined;
    let index = 0;
    this.backend.selectedPlotIdAction$.subscribe(item => pid = item);
    console.log("THis is the pid", pid);
    this.backend.plots$.subscribe(plots => plist = plots);
    index = plist.findIndex((plot:IPlot) =>plot.id === pid);
    this.plot = plist[index];
    console.log("THis is the plot: ", this.plot);

  }




  constructor(private router: Router, private backend: BackendService, private route: ActivatedRoute) {
  }

  showBuilder():
    void {
    console.log("show builder")
    this.router.navigate(['/plots', 0, 'edit', 'plotoptions']);
  }

}
