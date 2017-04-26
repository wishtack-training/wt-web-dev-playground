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
<div class="mdl-card">
    <div class="mdl-card__title">
        <h1 class="mdl-card__title-text">Angular</h1>
    </div>
    <div *ngIf="config">
        <wt-form-capacity
                [config]="config"
                (onConfigChange)="updateConfig($event)"></wt-form-capacity>
        <wt-form-dimensions
                [config]="config"
                (onConfigChange)="updateConfig($event)"></wt-form-dimensions>
        <div class="mdl-card__supporting-text">
            <wt-summary
                    [config]="config"></wt-summary>
        </div>
    </div>
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
