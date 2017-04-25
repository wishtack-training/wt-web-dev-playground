/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

import { ConfigStore } from '../elevator/config-store';

export const ConfiguratorComponent = {
    data: () => {

        const configStore = new ConfigStore();

        return {
            configStore: configStore,
            formComponent: 'wt-form-capacity'
        };

    },
    computed: {
        config: function () {
            return this.configStore.getConfig();
        }
    },
    methods: {
        undo: function () {
            this.configStore.undo();
        },
        updateConfig: function (config) {
            this.configStore.setConfig(config);
        }
    },
    template: `
<div>
    <h1>Configurator</h1>
    
    <button @click="formComponent = 'wt-form-capacity'">Capacity</button>
    <button @click="formComponent = 'wt-form-dimensions'">Dimensions</button>
    
    <component
        :config="config"
        :is="formComponent"
        @configChange="updateConfig"></component>
        
    <wt-summary
        :config="config"></wt-summary>
        
    <button @click="undo">UNDO</button>
       
</div>
`
};