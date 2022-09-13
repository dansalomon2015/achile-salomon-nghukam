import React, { PureComponent } from "react";
import { ButtonSizes, ColorsButton, QtyButton } from "../Buttons";
import {
    ItemDetails,
    Container,
    ItemName,
    QtyContainer,
    Qty,
    ItemImgContainer,
    ItemPrice,
    SectionTitle,
    Section,
    ItemDetail,
    BrandName,
    ControlsContainer,
    ControlLeft,
    ControlRight,
} from "./CartItem.style";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
        };
    }

    nextImg = () => {
        const { gallery } = this.props;
        if (this.state.imgIndex < gallery.length - 1) {
            this.setState({ imgIndex: this.state.imgIndex + 1 });
        } else {
            this.setState({ imgIndex: 0 });
        }
    };

    previousImg = () => {
        const { gallery } = this.props;
        if (this.state.imgIndex > 0) {
            this.setState({ imgIndex: this.state.imgIndex - 1 });
        } else {
            this.setState({ imgIndex: gallery.length - 1 });
        }
    };

    getAttributeValue = (value) => {
        return this.props[value];
    };
    render() {
        const { currency, qty, price, increment, decrement, attributes, gallery, updateItemAttribute, brand, name } =
            this.props;
        return (
            <Container>
                <ItemDetails>
                    <BrandName>{brand}</BrandName>
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
                                                    onClick={() => updateItemAttribute(attribute.name, item.value)}
                                                    width={`30px`}
                                                />
                                            );
                                        return (
                                            <ButtonSizes
                                                selected={item.value === this.getAttributeValue(attribute.name)}
                                                key={j}
                                                onClick={() => updateItemAttribute(attribute.name, item.value)}
                                                minWidth={`60px`}
                                                height={`40px`}
                                                fontSize={`16px`}
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
                <ItemDetail>
                    <QtyContainer>
                        <QtyButton width={`40px`} onClick={increment}>
                            +
                        </QtyButton>
                        <Qty>{qty}</Qty>
                        <QtyButton width={`40px`} onClick={decrement}>
                            -
                        </QtyButton>
                    </QtyContainer>
                    <ItemImgContainer src={gallery[this.state.imgIndex]}>
                        {gallery.length > 1 && (
                            <ControlsContainer>
                                <ControlLeft onClick={this.previousImg} />
                                <ControlRight onClick={this.nextImg} />
                            </ControlsContainer>
                        )}
                    </ItemImgContainer>
                </ItemDetail>
            </Container>
        );
    }
}
