
import { Component } from 'react';
import { configStore } from '../elevator/config-store';
import { FormCapacity } from './form-capacity.component';
import { FormDimensions } from './form-dimensions.component';
import { Summary } from './summary.component';

export class Configurator extends Component {

    constructor() {
        super();
        this.configStore = configStore;

        this.state = {
            config: null
        };

    }

    componentDidMount() {
        this.configStore.config$
            .subscribe((config) => this.setState({config: config}));
    }

    updateConfig(config) {
        this.configStore.updateConfig(config);
    }

    render() {

        if (this.state.config != null) {
            return <div>
                <h1>React</h1>
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
        else {
            return <div>Loading...</div>;
        }

    }

}