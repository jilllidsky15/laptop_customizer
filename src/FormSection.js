import React, { Component } from 'react';
import Features from './Features';

class FormSection extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features
                    features={this.props.features}
                    selected={this.props.selected}
                    updateFeature = {this.props.updateFeature}/>
            </form>
        )
    }

}

export default FormSection;