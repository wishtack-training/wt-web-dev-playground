/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { ConfigStore } from '../elevator/config-store';

@Component({
    selector: 'wt-configurator',
    template: `
<h1>Angular</h1>
<wt-form-capacity
        [config]="getConfig()"
        (onConfigChange)="updateConfig($event)"></wt-form-capacity>
<wt-form-dimensions
        [config]="getConfig()"
        (onConfigChange)="updateConfig($event)"></wt-form-dimensions>
<wt-summary
        [config]="getConfig()"></wt-summary>
`
})
export class ConfiguratorComponent {

    private _configStore = new ConfigStore();

    getConfig() {
        return this._configStore.getConfig();
    }

    updateConfig(config) {
        this._configStore.updateConfig(config);
    }

}
