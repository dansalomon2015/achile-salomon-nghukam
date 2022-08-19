import React, { Component } from "react";
import { Images } from "../../assets";
import { Colors } from "../../utils";
import { ProductName, ProductPrice, Card, AddToCardIcon, CartIcon, ProductInfo } from "./ProductCard.style";

export default class ProductCard extends Component {
    render() {
        return (
            <Card id="card">
                <img src={Images.Dress} alt="dress" />
                <ProductInfo>
                    <ProductName>Apollo Running Short</ProductName>
                    <div>
                        <ProductPrice>$50.00</ProductPrice>
                    </div>
                </ProductInfo>

                <AddToCardIcon>
                    <CartIcon src={Images.Cart} alt="dress" color={Colors.text_white} />
                </AddToCardIcon>
            </Card>
        );
    }
}
