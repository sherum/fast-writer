import {Component, EventEmitter, Input, Output} from '@angular/core';
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
export class PlotComponent {
  plotTypes = PLOTTYPE;
  // plotId = "";
  plot$: Observable<IPlot | undefined> = combineLatest([
    this.backend.plots$,
    this.backend.selectedPlotIdAction$
  ])
    .pipe(
      map(([plots, plotId]) =>
        plots.filter(plot => plot.id === plotId))[0]);




  constructor(private router: Router, private backend: BackendService, private route: ActivatedRoute) {
  }

  showBuilder():
    void {
    console.log("show builder")
    this.router.navigate(['/plots', 0, 'edit', 'plotoptions']);
  }

}
