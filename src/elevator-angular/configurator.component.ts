/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigStore, configStore } from '../elevator/config-store';
import { Subscription } from 'rxjs';
import { Config } from "../elevator/config";

@Component({
    selector: 'wt-configurator',
    template: `
<h1>Angular</h1>
<div *ngIf="config">
    <wt-form-capacity
            [config]="config"
            (onConfigChange)="updateConfig($event)"></wt-form-capacity>
    <wt-form-dimensions
            [config]="config"
            (onConfigChange)="updateConfig($event)"></wt-form-dimensions>
    <wt-summary
            [config]="config"></wt-summary>
</div>
`
})
export class ConfiguratorComponent implements OnInit, OnDestroy {

    config: Config;

    private _configStore = configStore;
    private _subscription: Subscription;

    constructor(private _changeDetector: ChangeDetectorRef) {}

    ngOnInit() {
        this._subscription = this._configStore.config$
            .subscribe((config) => {
                this.config = config;
                this._changeDetector.detectChanges();
            });
    }

    updateConfig(config) {
        this._configStore.updateConfig(config);
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }

}
