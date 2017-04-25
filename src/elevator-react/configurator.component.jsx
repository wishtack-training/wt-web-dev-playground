
import { Component } from 'react';
import { ConfigStore } from '../elevator/config-store';
import { FormCapacity } from './form-capacity.component';
import { FormDimensions } from './form-dimensions.component';
import { Summary } from './summary.component';

export class Configurator extends Component {

    constructor() {
        super();
        this.configStore = new ConfigStore();
        this.state = {
            config: this.configStore.getConfig()
        };

    }

    updateConfig(config) {
        this.configStore.updateConfig(config);
        this.setState({config: this.configStore.getConfig()});
    }

    render() {
        return <div>
            <h1>Configurator</h1>
            <FormCapacity
                config={this.state.config}
                onConfigUpdate={this.updateConfig.bind(this)}/>
            <FormDimensions
                config={this.state.config}
                onConfigUpdate={this.updateConfig.bind(this)}/>
            <Summary
                config={this.state.config}/>
        </div>;
    }

}