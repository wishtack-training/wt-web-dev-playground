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
<input
        type="text" 
        [ngModel]="config.height"
        (ngModelChange)="updateConfig({height: $event})">
<input
        type="text" 
        [ngModel]="config.width"
        (ngModelChange)="updateConfig({width: $event})">
`
})
export class FormDimensionsComponent {

    @Input() config: Config;
    @Output() onConfigChange = new EventEmitter();

    updateConfig(config) {
        this.onConfigChange.emit(config);
    }

}
