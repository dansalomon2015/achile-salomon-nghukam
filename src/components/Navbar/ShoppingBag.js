import React, { Component } from "react";
import { Images } from "../../assets";
import { Colors } from "../../utils";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import ColorsButton from "./ColorsButton";
import {
    ItemDetails,
    NbrOfItemText,
    MyBagText,
    ShoppingBagBody,
    ShoppingBagContainer,
    ItemName,
    QtyContainer,
    QtyButton,
    Qty,
    ItemImgContainer,
    ItemPrice,
    SectionTitle,
    Section,
    ButtonSizes,
    ButtonsContainer,
    TotalContainer,
    Total,
} from "./Navbar.style";

const sizes = ["XS", "S", "M", "L"];

export default class ShoppingBag extends Component {
    render() {
        return (
            <ShoppingBagContainer ref={this.props.innerRef}>
                <MyBagText>My Bag</MyBagText>
                <NbrOfItemText>3 items</NbrOfItemText>
                <ShoppingBagItem />
                <ShoppingBagItem />

                <TotalContainer>
                    <Total>Total</Total>
                    <Total>$200</Total>
                </TotalContainer>

                <ButtonsContainer>
                    <SecondaryButton title="View bag" />
                    <PrimaryButton title="CHECKOUT" />
                </ButtonsContainer>
            </ShoppingBagContainer>
        );
    }
}

class ShoppingBagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            size: "S",
        };
    }

    decrement = () => this.setState({ qty: this.state.qty > 0 ? this.state.qty - 1 : 0 });
    increment = () => this.setState({ qty: this.state.qty + 1 });

    render() {
        return (
            <ShoppingBagBody>
                <ItemDetails>
                    <ItemName>Apollo Running Short</ItemName>
                    <ItemPrice>$50.00</ItemPrice>
                    <SectionTitle>Size</SectionTitle>
                    <Section>
                        {sizes.map((s, index) => {
                            return (
                                <ButtonSizes
                                    selected={s === this.state.size}
                                    key={index}
                                    onClick={() => this.setState({ size: s })}
                                >
                                    {s}
                                </ButtonSizes>
                            );
                        })}
                    </Section>

                    <SectionTitle>Color</SectionTitle>
                    <Section>
                        <ColorsButton selected color={Colors.bg_grey} />
                        <ColorsButton color={Colors.dark} />
                        <ColorsButton color={Colors.green} />
                    </Section>
                </ItemDetails>
                <QtyContainer>
                    <QtyButton onClick={this.increment}>+</QtyButton>
                    <Qty>{this.state.qty}</Qty>
                    <QtyButton onClick={this.decrement}>-</QtyButton>
                </QtyContainer>
                <ItemImgContainer src={Images.Dress} />
            </ShoppingBagBody>
        );
    }
}
