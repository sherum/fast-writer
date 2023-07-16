import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {RouterModule, Routes, withDebugTracing} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {StorysComponent} from "../components/story-list/storys.component";
import {PlotsComponent} from "../components/plot-list/plots.component";
import {PersonsComponent} from "../components/person-list/persons.component";
import {EventsComponent} from "../components/event-list/events.component";
import {LocationsComponent} from "../components/location-list/locations.component";
import {ThingsComponent} from "../components/thing-list/things.component";
import {ScenesComponent} from "../components/scene-list/scenes.component";
import {StoryComponent} from "../components/story/story.component";
import {SceneComponent} from "../components/scene/scene.component";
import {PlotComponent} from "../components/plot/plot.component";
import {PersonComponent} from "../components/person/person.component";
import {EventComponent} from "../components/event/event.component";
import {LocationComponent} from "../components/location/location.component";
import {ThingComponent} from "../components/thing/thing.component";
import {PlotOptionsComponent} from "../components/plot-options/plot-options.component";
import {BuilderComponent} from "../components/builder/builder.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},


  {path: 'storys', component: StorysComponent},



  {path: 'scene-list/:id', component: SceneComponent},
  {
    path: 'plots/:id/edit', component: PlotComponent,
    children: [
      {
        path: 'plotoptions', component: PlotOptionsComponent, children: [
          {path: 'build/:itemId', component: BuilderComponent}
        ]
      },
    ]
  },
   {path: 'scene/:id', component: SceneComponent},
  {path: 'plot/:id', component: PlotComponent},
  {path: 'person/:id', component: PersonComponent},
  {path: 'event/:id', component: EventComponent},
  {path: 'location/:id', component: LocationComponent},
  {path: 'thing/:id', component: ThingComponent},
  // {path: 'storys/:id', component: StoryComponent},
  // {path: 'scenes', component: ScenesComponent},
  // {path: 'plots', component: PlotsComponent},
  // {path: 'persons', component: PersonsComponent},
  // {path: 'events', component: EventsComponent},
  // {path: 'locations', component: LocationsComponent},
  // {path: 'things', component: ThingsComponent},


  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
