/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
'use strict';

import {Config} from './config';

export class ConfigStore {

    constructor() {
        this._config = new Config();
        this._history = [];
        let data = localStorage.getItem('config');
        if (data != null) {
            Object.assign(this._config, JSON.parse(data));
        }
    }

    setConfig(config) {
        this._history.push(this._config);
        this._config = config;
        localStorage.setItem('config', JSON.stringify(this._config));
    }

    updateConfig(config) {
        let configClone = this._config.clone();
        this._history.push(this._config);
        Object.assign(configClone, config);
        this.setConfig(configClone);
    }

    getConfig() {
        return this._config;
    }

    undo() {
        if (this._history.length > 0) {
            this._config = this._history.pop();
        }
    }

}