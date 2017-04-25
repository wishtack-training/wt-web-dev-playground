/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

export const FormDimensionsComponent = {
    props: ['config'],
    data: function () {
        return {
            height: this.config.height
        }
    },
    watch: {
        height: function (value) {
            let config = this.config.clone();
            config.height = value;
            this.$emit('configChange', config);
        }
    },
    template: `
<div>
<form>
    <input v-model="height" type="text">
</form>
</div>
`
};