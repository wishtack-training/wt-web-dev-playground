/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

export const FormCapacityComponent = {
    props: ['config'],
    methods: {
        increment: function () {
            let config = this.config.clone();
            config.capacity += 1;
            this.$emit('configChange', config);
        },
        decrement: function () {
            let config = this.config.clone();
            config.capacity -= 1;
            this.$emit('configChange', config);
        }
    },
    template: `
<div>
    <button @click="increment()">MORE</button>
    <button @click="decrement()">LESS</button>
</div>
`
};
