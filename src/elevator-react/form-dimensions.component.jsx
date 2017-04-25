
import { Component } from 'react';

export class FormDimensions extends Component {

    updateHeight(event) {
        this.props.onConfigUpdate({
            height: event.target.value
        });
    }

    updateWidth(event) {
        this.props.onConfigUpdate({
            width: event.target.value
        });
    }

    render() {
        return <form>
            <input
                type="text"
                value={this.props.config.height}
                onChange={this.updateHeight.bind(this)}
            />
            <input
                type="text"
                value={this.props.config.width}
                onChange={this.updateWidth.bind(this)}
            />
        </form>
    }

}