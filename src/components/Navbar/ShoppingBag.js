import React, { PureComponent } from "react";
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
import { decrementQty, incrementQty } from "../../store";

class ShoppingBag extends PureComponent {
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
        const {
            currency: { label },
        } = this.props;
        if (!label) return "";
        return prices.find((p) => p.currency.label === label).amount;
    }

    render() {
        const { cart, currency, hide, innerRef } = this.props;
        return (
            <ShoppingBagContainer ref={innerRef}>
                <Content>
                    <MyBagText>My Bag</MyBagText>
                    <NbrOfItemText>{cart.length} items</NbrOfItemText>
                </Content>
                <ShoppingBagList>
                    {cart.map((item, index) => {
                        return (
                            <ShoppingBagItem
                                {...item}
                                key={index}
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
                        <Link to={"/cart"}>
                            <SecondaryButton onClick={hide} mr={"5px"}>
                                View bag
                            </SecondaryButton>
                        </Link>

                        <PrimaryButton ml={"5px"} title="CHECKOUT" />
                    </ButtonsContainer>
                </Content>
            </ShoppingBagContainer>
        );
    }
}

class ShoppingBagItem extends PureComponent {
    getAttributeValue = (value) => {
        return this.props[value];
    };

    render() {
        const { currency, qty, price, increment, decrement, attributes, gallery, brand, name } = this.props;
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
                                                    key={j}
                                                    color={item.value}
                                                    selected={item.value === this.getAttributeValue(attribute.name)}
                                                />
                                            );
                                        return (
                                            <ButtonSizes
                                                selected={item.value === this.getAttributeValue(attribute.name)}
                                                key={j}
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
