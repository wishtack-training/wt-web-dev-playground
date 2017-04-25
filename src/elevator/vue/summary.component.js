/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

export const SummaryComponent = {
    props: ['config'],
    template: `
<div>
<div>Summary</div>
<div>{{ config.capacity }}</div>
<div>{{ config.width }} x {{ config.height }}</div>
<div>-------</div>
<div>{{ config.getPrice() }}</div>
</div>
`
};