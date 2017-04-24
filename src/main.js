'use strict';

import {ElevatorConfigurator} from './elevator/elevator-configurator';


class SummaryController {

    constructor(elevatorConfigurator) {
        this._elevatorConfigurator = elevatorConfigurator;
    }

    render() {

        let configuration = elevatorConfigurator
            .getConfiguration();

        document.querySelector('#price').textContent = configuration.getPrice();

        document.querySelector('#capacity').value = configuration.capacity;

    }

}

class FormController {

    constructor(elevatorConfigurator, onUpdate) {
        this._elevatorConfigurator = elevatorConfigurator;
        this._onUpdate = onUpdate;
    }

    start() {

        document.querySelector('#set-capacity-3')
            .addEventListener('click', () => {
                this._elevatorConfigurator.setCapacity(3);
                this._onUpdate()
            });

        document.querySelector('#set-capacity-5')
            .addEventListener('click', () => {
                this._elevatorConfigurator.setCapacity(5);
                this._onUpdate();
            });

        this._onUpdate();

    }

}

let elevatorConfigurator = new ElevatorConfigurator();

let summaryController = new SummaryController(elevatorConfigurator);

let formController = new FormController(elevatorConfigurator, () => {
    summaryController.render();
});

formController.start();
