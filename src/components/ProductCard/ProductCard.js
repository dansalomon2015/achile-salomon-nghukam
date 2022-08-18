import React, { Component } from "react";
import { Images } from "../../assets";
import { Colors } from "../../utils";
import { ProductName, ProductPrice, Card, AddToCardIcon, CartIcon } from "./ProductCard.style";

export default class ProductCard extends Component {
    render() {
        return (
            <Card id="card">
                <img src={Images.Dress} alt="dress" />
                <ProductName>Apollo Running Short</ProductName>
                <ProductPrice>$50.00</ProductPrice>
                <AddToCardIcon>
                    <CartIcon src={Images.Cart} alt="dress" color={Colors.text_white} />
                </AddToCardIcon>
            </Card>
        );
    }
}
