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

    setConfig(elevatorConfiguration) {
        this._history.push(this._config);
        this._config = elevatorConfiguration;
        localStorage.setItem('config', JSON.stringify(this._config));
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