import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {RouterModule, Routes, withDebugTracing} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {StorysComponent} from "../components/story-list/storys.component";
import {StoryComponent} from "../components/story/story.component";
import {SceneComponent} from "../components/scene/scene.component";
import {PlotComponent} from "../components/plot/plot.component";
import {PersonComponent} from "../components/person/person.component";
import {EventComponent} from "../components/event/event.component";
import {LocationComponent} from "../components/location/location.component";
import {ThingComponent} from "../components/thing/thing.component";
import {PlotOptionsComponent} from "../components/plot-options/plot-options.component";
import {StoryDetailComponent} from "../components/story-detail/story-detail.component";
import {PlotsComponent} from "../components/plot-list/plots.component";
import {PersonsComponent} from "../components/person-list/persons.component";
import {EventsComponent} from "../components/event-list/events.component";
import {LocationsComponent} from "../components/location-list/locations.component";
import {ThingsComponent} from "../components/thing-list/things.component";
import {ScenesComponent} from "../components/scene-list/scenes.component";
import {BuilderComponent} from "../components/builder/builder.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'plot/:id', component: PlotComponent, outlet:'single'},
  {path: 'scene/:id', component: SceneComponent, outlet:'single'},
  {path: 'person/:id', component: PersonComponent, outlet:'single'},


  {path: 'event/:id', component: EventComponent, outlet:'single'},
  {path: 'location/:id', component: LocationComponent, outlet:'single'},
  {path: 'thing/:id', component: ThingComponent, outlet:'single'},
  {path: 'storys', component: StorysComponent},
  {path: 'home', component: HomeComponent},



  {path: 'story-details', component: StoryDetailComponent,outlet:'details'},
  {path: 'plotoptions', component: PlotOptionsComponent,outlet:'builder'},
  // {
  //   path: 'plots/:id/edit', component: PlotComponent,
  //   children: [
  //     {
  //       path: 'plotoptions', component: PlotOptionsComponent, children: [
  //         {path: 'build/:itemId', component: BuilderComponent}
  //       ]
  //     },
  //   ]
  // },
  {path: 'story/:id', component: StoryComponent},
  {path: 'scene-list/:id', component: SceneComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
