/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, Input } from '@angular/core';
import { Config } from '../elevator/config';

@Component({
    selector: 'wt-summary',
    template: `
<div><span>Capacity: </span><span>{{ config.capacity }}</span></div>
<div><span>Dimensions: </span><span>{{ config.width }} x {{ config.height }}</span></div>
<div><span>Price: </span><span>{{ config.getPrice() }}</span></div>
`
})
export class SummaryComponent {

    @Input() config: Config;

}
