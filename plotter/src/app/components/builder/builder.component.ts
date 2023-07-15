import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  builderType: number = -1;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        // @ts-ignore: Object is possibly 'null'.
        this.builderType = +param.get('itemId');
      }
    )

  }

  save(): void {

    this.router.navigate(['/plot-list', 0, 'edit', 'plotoptions'])
  }

}
