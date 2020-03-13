import React, { Component } from 'react';
import CartSummary from './CartSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class SummarySection extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartSummary
                    selected={this.props.selected} />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        )
    }
}
export default SummarySection;