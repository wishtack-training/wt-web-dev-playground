/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
'use strict';

import { Config } from './config';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class ConfigStore {

    private _config: Config;
    private _history: Config[];
    private _config$ = new ReplaySubject<Config>(1);

    constructor() {
        this._config = new Config();
        this._history = [];
        let data = localStorage.getItem('config');
        if (data != null) {
            this.updateConfig(JSON.parse(data));
        }
    }

    get config$() {
        return this._config$;
    }

    updateConfig(config) {

        let configClone = this._config.clone();

        this._history.push(this._config);

        Object.assign(configClone, config);

        this._setConfig(configClone);

    }

    getConfig() {
        return this._config;
    }

    undo() {
        if (this._history.length > 0) {
            this._setConfig(this._history.pop());
        }
    }

    private _setConfig(config) {

        this._config = config;

        localStorage.setItem('config', JSON.stringify(this._config));

        this._config$.next(this._config);

    }

}

export const configStore = new ConfigStore();