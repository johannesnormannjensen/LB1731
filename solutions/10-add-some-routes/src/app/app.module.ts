import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';

import { LeafletModule } from './leaflet/leaflet.module';
import { SidebarComponent } from './sidebar';
import { FooterComponent } from './footer';
import { PlaygroundService, LocationService } from './shared';
import { DefaultDescriptionPipe, DistancePipe, HumanizeDistancePipe } from './shared/pipes';

import { routing } from './app.routing';

@NgModule({
    declarations: [SidebarComponent, FooterComponent, DefaultDescriptionPipe, DistancePipe, HumanizeDistancePipe],
    imports: [BrowserModule, LeafletModule, HttpModule, routing],
    providers: [PlaygroundService, LocationService],
    bootstrap: [AppComponent],
})
export class AppModule { }
