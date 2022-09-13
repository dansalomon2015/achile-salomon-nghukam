import React, { PureComponent } from "react";
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
    GalleryItemContent,
} from "./ProductDetails.style";
import parse from "html-react-parser";
import { addProduct } from "../../store";

class ProductDetails extends PureComponent {
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
                        const { name } = attr;
                        product[name] = null;
                    });
                    this.setState({ product: product, selectedImg: product.gallery[0] });
                }
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => this.setState({ loading: false }));
    }

    getPrice() {
        const { currency } = this.props;
        const { prices } = this.state.product;
        if (!currency) return "";
        return prices.find((p) => p.currency.label === currency.label).amount;
    }

    addToCart() {
        const { dispatch } = this.props;
        const { product } = this.state;
        const { attributes } = product;

        let attributesSeleceted = true;
        let missingAttributeName = [];

        attributes.forEach((attr) => {
            const { name } = attr;
            if (!product[name]) {
                attributesSeleceted = false;
                missingAttributeName.push(name);
            }
        });

        if (!attributesSeleceted) {
            return alert(
                `Please select ${missingAttributeName.join(" | ")} attribute${
                    missingAttributeName.length > 1 ? "s" : ""
                }`
            );
        }

        dispatch(addProduct(this.state.product));
    }

    renderGallery(gallery) {
        return (
            <>
                <GalleryContainer>
                    <GalleryItemsContainer>
                        {gallery.map((img, index) => {
                            return (
                                <GalleryItem
                                    selected={img === this.state.selectedImg}
                                    key={index}
                                    onClick={() => {
                                        this.setState({ selectedImg: img });
                                    }}
                                >
                                    <GalleryItemContent src={img} />
                                </GalleryItem>
                            );
                        })}
                    </GalleryItemsContainer>
                    <ImgViewer src={this.state.selectedImg} />
                </GalleryContainer>
            </>
        );
    }

    renderAttribubes = (attributes) => {
        return (
            <>
                {attributes.map((attribute, i) => {
                    const { name, items, type } = attribute;
                    return (
                        <AttributesContainer key={i}>
                            <SectionTitle>{name}:</SectionTitle>
                            <Section>
                                {items.map((item, j) => {
                                    const { value } = item;
                                    if (type === "swatch")
                                        return (
                                            <ColorsButton
                                                key={j}
                                                color={value}
                                                selected={value === this.getAttributeValue(name)}
                                                onClick={() => this.updateAttribute(name, value)}
                                                width={`30px`}
                                            />
                                        );
                                    return (
                                        <ButtonSizes
                                            selected={value === this.getAttributeValue(name)}
                                            key={j}
                                            onClick={() => this.updateAttribute(name, value)}
                                            minWidth={`60px`}
                                            height={`40px`}
                                            fontSize={`16px`}
                                        >
                                            {value}
                                        </ButtonSizes>
                                    );
                                })}
                            </Section>
                        </AttributesContainer>
                    );
                })}
            </>
        );
    };

    renderAddToCartButton = (inStock) => {
        if (!inStock) return <p>This product is disabled</p>;
        return (
            <PrimaryButton
                onClick={this.addToCart}
                title="ADD TO CART"
                width={`280px`}
                height={`50px`}
                mt={`20px`}
                mb={`40px`}
            />
        );
    };

    render() {
        const { product, loading } = this.state;

        if (!loading && !product) return <NotFound>Product Not found !</NotFound>;
        if (!product) return null;

        const { gallery, brand, name, attributes, description, inStock } = product;
        const {
            currency: { symbol },
        } = this.props;
        return (
            <Container>
                {this.renderGallery(gallery)}

                <DetailsContainer>
                    <Brand>{brand}</Brand>
                    <ItemName>{name}</ItemName>

                    {this.renderAttribubes(attributes)}

                    <SectionTitle>PRICE</SectionTitle>

                    <ItemPrice>
                        {symbol ? symbol : ""}
                        {this.getPrice()}
                    </ItemPrice>

                    {this.renderAddToCartButton(inStock)}
                    <Description>{parse(`${description}`)}</Description>
                </DetailsContainer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.mystore.currency,
    };
};

export default connect(mapStateToProps)(ProductDetails);
