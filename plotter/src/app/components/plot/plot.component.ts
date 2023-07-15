import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {IPlot} from "../../models/plot";

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent {
@Input() plot:IPlot|undefined;
@Output() plotEmitter:EventEmitter<IPlot> = new EventEmitter<IPlot>();


  constructor(private router:Router) {

  }

  showBuilder():void{
    console.log("show builder")
    this.router.navigate(['/plots',0,'edit','plotoptions']);
  }

}
