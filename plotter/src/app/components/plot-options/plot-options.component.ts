import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-plot-options',
  templateUrl: './plot-options.component.html',
  styleUrls: ['./plot-options.component.css']
})
export class PlotOptionsComponent {

  showParent:boolean=false;
  constructor(private router:Router) {
  }

  setParent():void{
    this.router.navigate(['/plot-list',0,'edit','plotoptions','build',0]);
  }
}
