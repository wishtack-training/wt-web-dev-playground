/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator.component';
import { SummaryComponent } from './summary.component';
import { FormCapacityComponent } from './form-capacity.component';
import { FormDimensionsComponent } from './form-dimensions.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        ConfiguratorComponent,
        FormCapacityComponent,
        FormDimensionsComponent,
        SummaryComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ]
})
export class AppModule {

}