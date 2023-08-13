import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PlotsComponent } from './components/plot-list/plots.component';
import { EventsComponent } from './components/event-list/events.component';
import { ScenesComponent } from './components/scene-list/scenes.component';
import { StorysComponent } from './components/story-list/storys.component';
import { PersonsComponent } from './components/person-list/persons.component';
import { LocationsComponent } from './components/location-list/locations.component';
import { ThingsComponent } from './components/thing-list/things.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HomeComponent } from './components/home/home.component';
import {UserModule} from "./user/user.module";
import { StoryComponent } from './components/story/story.component';
import { SceneComponent } from './components/scene/scene.component';
import { PlotComponent } from './components/plot/plot.component';
import { PersonComponent } from './components/person/person.component';
import { EventComponent } from './components/event/event.component';
import { LocationComponent } from './components/location/location.component';
import { ThingComponent } from './components/thing/thing.component';
import { PlotOptionsComponent } from './components/plot-options/plot-options.component';
import { BuilderComponent } from './components/builder/builder.component';
import {FormsModule} from "@angular/forms";
import { ParentBuilderComponent } from './components/parent-builder/parent-builder.component';
import { SceneBuilderComponent } from './components/scene-builder/scene-builder.component';
import { EventBuilderComponent } from './components/event-builder/event-builder.component';
import { PersonBuilderComponent } from './components/person-builder/person-builder.component';
import { LocationBuilderComponent } from './components/location-builder/location-builder.component';
import { StorySummaryComponent } from './components/story-summary/story-summary.component';
import { StoryDetailComponent } from './components/story-detail/story-detail.component';
import {AppLoginModule} from "./authentication/authentication/app-login.module";

@NgModule({
  declarations: [
    AppComponent,
    PlotsComponent,
    EventsComponent,
    ScenesComponent,
    StorysComponent,
    PersonsComponent,
    LocationsComponent,
    ThingsComponent,
    HomeComponent,
    StoryComponent,
    SceneComponent,
    PlotComponent,
    PersonComponent,
    EventComponent,
    LocationComponent,
    ThingComponent,
    PlotOptionsComponent,
    BuilderComponent,
    ParentBuilderComponent,
    SceneBuilderComponent,
    EventBuilderComponent,
    PersonBuilderComponent,
    LocationBuilderComponent,
    StorySummaryComponent,
    StoryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    AppLoginModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
