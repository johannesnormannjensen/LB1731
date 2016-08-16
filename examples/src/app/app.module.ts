import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routing } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { IOModule } from './io/io.module';
import { AsyncModule } from './async/async.module';
import { PipesModule } from './pipes/pipes.module';
import { AttributesModule } from './attributes/attributes.module';
import { StructuralModule } from './structural/structural.module';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, routing, ComponentsModule, ServicesModule, IOModule, AsyncModule, PipesModule, AttributesModule, StructuralModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}