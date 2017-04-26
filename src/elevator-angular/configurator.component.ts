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
    styles: [
        `
            .mdl-card {
                width: 100%;
            }
            
            .wt-forms {
                display: flex;
                flex-direction: column;
            }
            
            .wt-container {
                display: flex;
                flex-direction: column;
            }
            @media(min-width: 600px) {
                .wt-container {
                    flex-direction: row;
                }
            }
            
            .wt-container>div {
                flex-grow: 1;
                flex-basis: auto;
            }
            
        `
    ],
    template: `
<div class="mdl-card">
    <div class="mdl-card__title">
        <h1 class="mdl-card__title-text">Angular</h1>
    </div>
    <div class="wt-container" *ngIf="config">

        <div class="wt-forms">
            <wt-form-capacity
                    [config]="config"
                    (onConfigChange)="updateConfig($event)"></wt-form-capacity>
            <wt-form-dimensions
                    [config]="config"
                    (onConfigChange)="updateConfig($event)"></wt-form-dimensions>
        </div>
        
        <div>
            <wt-summary
                    [config]="config"
                    class="mdl-card__supporting-text"></wt-summary>
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
