import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductDetails } from "../../api";
import { ButtonSizes, ColorsButton, PrimaryButton } from "../../components";
import {
    Container,
    DetailsContainer,
    GalleryContainer,
    GalleryItem,
    GalleryItemsContainer,
    ImgViewer,
    ItemPrice,
    SectionTitle,
    Section,
    ItemName,
    Brand,
    AttributesContainer,
    Description,
    NotFound,
} from "./ProductDetails.style";
import parse from "html-react-parser";
import { addProduct } from "../../store";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            loading: true,
            selectedImg: "",
        };

        this.addToCart = this.addToCart.bind(this);
    }

    updateAttribute = (attrName, value) => {
        let product = { ...this.state.product };
        product[attrName] = value;
        this.setState({ product });
    };

    getAttributeValue = (value) => {
        return this.state.product[value];
    };

    componentDidMount() {
        const link = window.location.pathname.split("/");
        const productId = link[link.length - 1];
        getProductDetails(productId)
            .then((data) => {
                let product = data.product;

                if (product) {
                    product.qty = 1;
                    product.attributes.forEach((attr) => {
                        product[attr.name] = attr.items[0].value;
                    });
                    this.setState({ product: product, selectedImg: product.gallery[0] });
                }
                this.setState({ loading: false });
            })
            .catch((e) => {
                this.setState({ loading: false });
            });
    }

    getPrice() {
        const { currency } = this.props;
        const { prices } = this.state.product;
        if (!currency) return "";
        return prices.find((p) => p.currency.label === currency.label).amount;
    }

    addToCart() {
        const { dispatch } = this.props;
        dispatch(addProduct(this.state.product));
    }

    render() {
        if (this.state.product) {
            const { gallery, brand, name, attributes, description } = this.state.product;
            const { currency } = this.props;
            return (
                <Container>
                    <GalleryContainer>
                        <GalleryItemsContainer>
                            {gallery.map((img, index) => {
                                return (
                                    <GalleryItem
                                        selected={img === this.state.selectedImg}
                                        src={img}
                                        key={index}
                                        onClick={() => {
                                            this.setState({ selectedImg: img });
                                        }}
                                    />
                                );
                            })}
                        </GalleryItemsContainer>
                        <ImgViewer src={this.state.selectedImg} />
                    </GalleryContainer>
                    <DetailsContainer>
                        <Brand>{brand}</Brand>
                        <ItemName>{name}</ItemName>

                        {attributes.map((attribute, i) => {
                            return (
                                <AttributesContainer key={i + 1}>
                                    <SectionTitle>{attribute.name}:</SectionTitle>
                                    <Section>
                                        {attribute.items.map((item, j) => {
                                            if (attribute.type === "swatch")
                                                return (
                                                    <ColorsButton
                                                        key={j}
                                                        color={item.value}
                                                        selected={item.value === this.getAttributeValue(attribute.name)}
                                                        onClick={() => this.updateAttribute(attribute.name, item.value)}
                                                        width={`30px`}
                                                    />
                                                );
                                            return (
                                                <ButtonSizes
                                                    selected={item.value === this.getAttributeValue(attribute.name)}
                                                    key={j}
                                                    onClick={() => this.updateAttribute(attribute.name, item.value)}
                                                    minWidth={`60px`}
                                                    height={`40px`}
                                                    fontSize={`16px`}
                                                >
                                                    {item.value}
                                                </ButtonSizes>
                                            );
                                        })}
                                    </Section>
                                </AttributesContainer>
                            );
                        })}

                        <SectionTitle>PRICE</SectionTitle>

                        <ItemPrice>
                            {currency ? currency.symbol : ""}
                            {this.getPrice()}
                        </ItemPrice>

                        <PrimaryButton
                            onClick={this.addToCart}
                            title="ADD TO CART"
                            width={`280px`}
                            height={`50px`}
                            mt={`20px`}
                            mb={`40px`}
                        />

                        <Description>{parse(`${description}`)}</Description>
                    </DetailsContainer>
                </Container>
            );
        }

        if (!this.state.loading && !this.state.product) return <NotFound>Product Not found !</NotFound>;

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.mystore.currency,
    };
};

export default connect(mapStateToProps)(ProductDetails);
