import React, { Component } from "react";
import { connect } from "react-redux";
import { CartItem, PrimaryButton } from "../../components";
import { decrementQty, incrementQty, updateAttribute } from "../../store";
import { Container, List, NoItems, Row, RowTitle, RowValue, Title } from "./Cart.style";

class Cart extends Component {
    decrement = (itemIndex) => {
        const { dispatch } = this.props;
        dispatch(decrementQty(itemIndex));
    };
    increment = (itemIndex) => {
        const { dispatch } = this.props;
        dispatch(incrementQty(itemIndex));
    };

    getTotal() {
        let total = 0;
        const { cart } = this.props;
        cart.forEach((item) => {
            total += this.getPrice(item) * item.qty;
        });
        return Math.round(total * 100) / 100;
    }

    getPrice(item) {
        const { prices } = item;
        const { currency } = this.props;
        if (!currency) return "";
        return prices.find((p) => p.currency.label === currency.label).amount;
    }

    updateItemAttribute = (attrName, value, index) => {
        this.props.dispatch(updateAttribute({ attrName, value, productIndex: index }));
    };

    evaluateTotal = () => {
        let sum = 0;
        const { cart } = this.props;
        cart.forEach((item) => {
            sum += this.getPrice(item) * item.qty;
        });

        return Math.round(sum * 100) / 100;
    };

    evaluateTax = () => {
        return Math.round(this.evaluateTotal() * 21) / 100;
    };

    countItems = () => {
        let count = 0;
        const { cart } = this.props;
        cart.forEach((item) => {
            count += item.qty;
        });

        return count;
    };

    render() {
        const { cart, currency } = this.props;
        const crcy = currency ? currency.symbol : "";
        return (
            <Container>
                <Title>cart</Title>
                <List>
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                                {...item}
                                key={index}
                                index={index}
                                price={this.getPrice(item)}
                                currency={currency}
                                increment={() => this.increment(index)}
                                decrement={() => this.decrement(index)}
                                updateItemAttribute={(attrName, value) => {
                                    this.updateItemAttribute(attrName, value, index);
                                }}
                            />
                        );
                    })}
                    {!cart.length && <NoItems>No items in your cart.</NoItems>}
                </List>

                <table>
                    <Row>
                        <RowTitle>Tax 21%:</RowTitle>
                        <RowValue>
                            {crcy}
                            {this.evaluateTax()}
                        </RowValue>
                    </Row>
                    <Row>
                        <RowTitle>Quantity:</RowTitle>
                        <RowValue>{this.countItems()}</RowValue>
                    </Row>
                    <Row>
                        <RowTitle fontWeight={`500`}>Total:</RowTitle>
                        <RowValue>
                            {crcy}
                            {this.evaluateTotal()}
                        </RowValue>
                    </Row>
                </table>
                <PrimaryButton mt={`20px`} width={`250px`} title="ORDER" />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.mystore.cart,
        currency: state.mystore.currency,
    };
};

export default connect(mapStateToProps)(Cart);
