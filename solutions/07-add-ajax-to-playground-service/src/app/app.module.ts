import { PlaygroundService } from './shared/playground.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { LeafletModule } from './leaflet';
import { SidebarComponent } from './sidebar';
import { FooterComponent } from './footer';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

@NgModule({
    declarations: [AppComponent, SidebarComponent, FooterComponent],
    imports: [BrowserModule, LeafletModule, HttpModule],
    providers: [PlaygroundService],
    bootstrap: [AppComponent],
})
export class AppModule {

}
