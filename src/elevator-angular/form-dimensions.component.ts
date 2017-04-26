/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Config } from '../elevator/config';

@Component({
    selector: 'wt-form-dimensions',
    template: `
<div class="mdl-textfield mdl-js-textfield">
    <input
            [ngModel]="config.height"
            (ngModelChange)="updateConfig({height: $event})"
            class="mdl-textfield__input"
            type="number"
            id="wt-height">
    <label class="mdl-textfield__label" for="wt-height">Height</label>
</div>
<div class="mdl-textfield mdl-js-textfield">
    <input
            [ngModel]="config.width"
            (ngModelChange)="updateConfig({width: $event})"
            class="mdl-textfield__input"
            type="number"
            id="wt-width">
    <label class="mdl-textfield__label" for="wt-width">Width</label>
</div>
`
})
export class FormDimensionsComponent {

    @Input() config: Config;
    @Output() onConfigChange = new EventEmitter();

    updateConfig(config) {
        this.onConfigChange.emit(config);
    }

}
