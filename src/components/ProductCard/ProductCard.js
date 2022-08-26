import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetails } from "../../api";
import { Images } from "../../assets";
import { addProduct } from "../../store";
import { Colors } from "../../utils";
import {
    ProductName,
    ProductPrice,
    Card,
    AddToCardIcon,
    CartIcon,
    ProductInfo,
    ImgContainer,
} from "./ProductCard.style";

class ProductCard extends Component {
    getPrice() {
        const { prices, currency } = this.props;
        if (!currency) return "";
        return prices.find((p) => p.currency.label === currency.label).amount;
    }

    addToCart(p) {
        const { dispatch } = this.props;
        let product = { ...p };
        product.qty = 1;
        product.attributes.forEach((attr) => {
            product[attr.name] = attr.items[0].value;
        });
        dispatch(addProduct(product));
    }

    addIt(id) {
        const { cart } = this.props;

        let productData = undefined;
        cart.forEach((p) => {
            if (p.id === id) productData = p;
        });

        if (productData) {
            this.addToCart(productData);
        } else {
            getProductDetails(id).then((data) => {
                let product = data.product;
                this.addToCart(product);
            });
        }
    }

    render() {
        const { brand, name, gallery, currency, id } = this.props;
        return (
            <Card id="card">
                <ImgContainer src={gallery[0]} />
                <ProductInfo>
                    <ProductName>
                        {brand} {name}
                    </ProductName>
                    <div>
                        {currency && (
                            <ProductPrice>
                                {currency.symbol}
                                {this.getPrice()}
                            </ProductPrice>
                        )}
                    </div>
                </ProductInfo>

                <AddToCardIcon onClick={() => this.addIt(id)}>
                    <CartIcon src={Images.Cart} alt="dress" color={Colors.text_white} />
                </AddToCardIcon>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return { currency: state.mystore.currency, cart: state.mystore.cart };
};

export default connect(mapStateToProps)(ProductCard);
