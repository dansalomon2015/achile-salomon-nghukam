import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton, ColorsButton, QtyButton, ButtonSizes } from "../Buttons";
import {
    ItemDetails,
    NbrOfItemText,
    MyBagText,
    ShoppingBagBody,
    ShoppingBagContainer,
    ItemName,
    QtyContainer,
    Qty,
    ItemImgContainer,
    ItemPrice,
    SectionTitle,
    Section,
    ButtonsContainer,
    TotalContainer,
    Total,
    TotalText,
    ShoppingBagList,
    Content,
    NoItems,
} from "./Navbar.style";
import { connect } from "react-redux";
import { decrementQty, incrementQty, updateAttribute } from "../../store";

class ShoppingBag extends Component {
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

    render() {
        const { cart, currency, hide } = this.props;
        return (
            <ShoppingBagContainer ref={this.props.innerRef}>
                <Content>
                    <MyBagText>My Bag</MyBagText>
                    <NbrOfItemText>{cart.length} items</NbrOfItemText>
                </Content>
                <ShoppingBagList>
                    {cart.map((item, index) => {
                        return (
                            <ShoppingBagItem
                                {...item}
                                key={index + 1}
                                increment={() => this.increment(index)}
                                decrement={() => this.decrement(index)}
                                price={this.getPrice(item)}
                                currency={currency}
                                updateItemAttribute={(attrName, value) => {
                                    this.updateItemAttribute(attrName, value, index);
                                }}
                            />
                        );
                    })}
                </ShoppingBagList>
                {!cart.length && <NoItems>No items in your cart.</NoItems>}
                <Content>
                    <TotalContainer>
                        <TotalText>Total</TotalText>
                        <Total>
                            {currency ? currency.symbol : ""}
                            {this.getTotal()}
                        </Total>
                    </TotalContainer>

                    <ButtonsContainer>
                        <SecondaryButton onClick={hide} mr={"5px"}>
                            <Link to={"/cart"}>View bag</Link>
                        </SecondaryButton>
                        <PrimaryButton ml={"5px"} title="CHECKOUT" />
                    </ButtonsContainer>
                </Content>
            </ShoppingBagContainer>
        );
    }
}

class ShoppingBagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "S",
        };
    }

    getAttributeValue = (value) => {
        return this.props[value];
    };

    render() {
        const { currency, qty, price, increment, decrement, attributes, gallery, updateItemAttribute, brand, name } =
            this.props;
        return (
            <ShoppingBagBody>
                <ItemDetails>
                    <ItemName>{brand}</ItemName>
                    <ItemName>{name}</ItemName>
                    <ItemPrice>
                        {currency ? currency.symbol : ""}
                        {price}
                    </ItemPrice>

                    {attributes.map((attribute, i) => {
                        return (
                            <div key={i + 1}>
                                <SectionTitle>{attribute.name}:</SectionTitle>
                                <Section>
                                    {attribute.items.map((item, j) => {
                                        if (attribute.type === "swatch")
                                            return (
                                                <ColorsButton
                                                    key={j + 1}
                                                    color={item.value}
                                                    selected={item.value === this.getAttributeValue(attribute.name)}
                                                    onClick={() => updateItemAttribute(attribute.name, item.value)}
                                                />
                                            );
                                        return (
                                            <ButtonSizes
                                                selected={item.value === this.getAttributeValue(attribute.name)}
                                                key={j + 1}
                                                onClick={() => updateItemAttribute(attribute.name, item.value)}
                                            >
                                                {item.value}
                                            </ButtonSizes>
                                        );
                                    })}
                                </Section>
                            </div>
                        );
                    })}
                </ItemDetails>
                <QtyContainer>
                    <QtyButton onClick={increment}>+</QtyButton>
                    <Qty>{qty}</Qty>
                    <QtyButton onClick={decrement}>-</QtyButton>
                </QtyContainer>
                <ItemImgContainer src={gallery[0]} />
            </ShoppingBagBody>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.mystore.cart,
        currency: state.mystore.currency,
    };
};

export default connect(mapStateToProps)(ShoppingBag);
