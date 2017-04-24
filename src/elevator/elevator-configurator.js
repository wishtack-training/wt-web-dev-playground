/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
'use strict';

import {ElevatorConfiguration} from './elevator-configuration';

export class ElevatorConfigurator {

    constructor() {
        this._elevatorConfiguration = new ElevatorConfiguration();
    }

    setConfiguration(elevatorConfiguration) {
        this._elevatorConfiguration = elevatorConfiguration;
    }

    getConfiguration() {
        return this._elevatorConfiguration;
    }

    setCapacity(capacity) {
        let elevatorConfiguration = this.getConfiguration().clone();
        elevatorConfiguration.capacity = capacity;
        this.setConfiguration(elevatorConfiguration);
    }

}