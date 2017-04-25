
import { Component } from 'react';

export class FormCapacity extends Component {

    updateCapacity(event) {
        this.props.onConfigUpdate({
            capacity: event.target.value
        });
    }

    render() {
        return <form>
            <input
                type="text"
                value={this.props.config.capacity}
                onChange={this.updateCapacity.bind(this)}
            />
        </form>
    }

}