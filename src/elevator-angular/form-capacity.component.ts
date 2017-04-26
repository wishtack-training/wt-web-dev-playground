/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Config } from '../elevator/config';

@Component({
    selector: 'wt-form-capacity',
    template: `
<div class="mdl-textfield mdl-js-textfield">
    <input
            [ngModel]="config.capacity"
            (ngModelChange)="updateConfig({capacity: $event})"
            class="mdl-textfield__input"
            type="number"
            id="wt-capacity">
    <label class="mdl-textfield__label" for="wt-capacity">Capacity</label>
</div>
`
})
export class FormCapacityComponent {

    @Input() config: Config;
    @Output() onConfigChange = new EventEmitter();

    updateConfig(config) {
        this.onConfigChange.emit(config);
    }

}
