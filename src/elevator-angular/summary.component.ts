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
    styles: [
        `
            .wt-elevator-rect {
                fill: #b3fdff;
                stroke-width: 3px;
                stroke: black;
            }
            
            svg * {
                transition: all .5s;
            }
            
        `
    ],
    template: `
<div><span>Capacity: </span><span>{{ config.capacity }}</span></div>
<div><span>Dimensions: </span><span>{{ config.width }} x {{ config.height }}</span></div>
<div><span>Price: </span><span>{{ config.getPrice() }}</span></div>

<svg
        [attr.height]="config.height"
        [attr.width]="config.width">
    
    <rect
            class="wt-elevator-rect"
            [attr.height]="config.height"
            [attr.width]="config.width">
        
    </rect>

    <circle
            [attr.r]="capacityCircleRadius"
            cx="50%"
            cy="50%"
            stroke="black"
            stroke-width="3"
            fill="red">
    </circle>
    
</svg>

`
})
export class SummaryComponent {

    @Input() config: Config;

    get capacityCircleRadius() {
        return (this.config.capacity * 10) + 30;
    }


}
