import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getProductsByCategory } from "../api";
import { Images } from "../assets";
import { Colors } from "../utils";
import ErrorBoundary from "./ErrorBoundary";
import ProductCard from "./ProductCard/ProductCard";

const Container = styled.div`
    margin-bottom: 100px;
`;

const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const CategoryName = styled.div`
    font-size: 42px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: ${Colors.dark};
    margin-top: 160px;
    text-transform: capitalize;
`;

const Load = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class ProductList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
        };
    }

    loadProduct(categoryName) {
        this.setState({ loading: true });

        getProductsByCategory(categoryName).then((data) => {
            this.setState({ loading: false });
            console.log(data);
            try {
                if (Array.isArray(data.category.products)) {
                    this.setState({ products: data.category.products });
                }
            } catch (error) {}
        });
    }

    componentWillReceiveProps(nextProps) {
        this.loadProduct(nextProps.category.name);
    }

    componentDidMount() {
        const { category } = this.props;
        if (category) this.loadProduct(category.name);
    }

    render() {
        const { category } = this.props;

        return (
            <Container>
                <CategoryName>{category ? category.name : ""}</CategoryName>
                {this.state.loading ? (
                    <Load>
                        <img src={Images.LoaderICon} width="50" alt="Loader" />
                    </Load>
                ) : (
                    <ErrorBoundary message="Error in PLP">
                        <List>
                            {this.state.products.map((item, index) => {
                                return <ProductCard key={index + 1} index={index} {...item} />;
                            })}
                        </List>
                    </ErrorBoundary>
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { category: state.mystore.category };
};

export default connect(mapStateToProps)(ProductList);
