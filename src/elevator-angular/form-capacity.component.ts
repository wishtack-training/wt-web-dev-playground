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
<input
        type="text" 
        [ngModel]="config.capacity"
        (ngModelChange)="updateConfig({capacity: $event})">
`
})
export class FormCapacityComponent {

    @Input() config: Config;
    @Output() onConfigChange = new EventEmitter();

    updateConfig(config) {
        this.onConfigChange.emit(config);
    }

}
