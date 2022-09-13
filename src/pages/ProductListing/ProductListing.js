import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getProductsByCategory } from "../../api";
import { ErrorBoundary, ProductCard } from "../../components";
import { selectCategory } from "../../store";
import { Colors } from "../../utils";

const Container = styled.div`
    margin-bottom: 100px;
`;

const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
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

class ProductListing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
        };
    }

    loadProduct() {
        this.setState({ loading: true });
        const { category } = this.props;

        if (!category) return;
        const { name } = category;

        getProductsByCategory(name).then((data) => {
            this.setState({ loading: false });
            try {
                if (Array.isArray(data.category.products)) {
                    this.setState({ products: data.category.products });
                }
            } catch (error) {}
        });
    }

    componentDidUpdate(prevProps) {
        const link = window.location.pathname.split("/");
        const categoryName = link[link.length - 1];

        const { categories, dispatch } = this.props;

        if (categories.length === 0) return;

        let category = categoryName ? categories.find((c) => c.name === categoryName) : categories[0];

        dispatch(selectCategory(category));

        if (!category) {
            return;
        }

        if (prevProps.category) {
            const { name } = category;
            if (prevProps.category.name === name) return;
        }

        this.loadProduct();
    }

    componentDidMount() {
        this.loadProduct();
    }

    render() {
        const { category } = this.props;

        if (!category) return <p>Page not found !</p>;

        return (
            <Container>
                <CategoryName>{category ? category.name : ""}</CategoryName>
                {this.state.loading ? (
                    <Load>
                        <img src={Image.LoaderICon} width="50" alt="Loader" />
                    </Load>
                ) : (
                    <ErrorBoundary message="Error in PLP">
                        <List>
                            {this.state.products.map((item, index) => {
                                return <ProductCard key={index} index={index} {...item} />;
                            })}
                        </List>
                    </ErrorBoundary>
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { category: state.mystore.category, categories: state.mystore.categories };
};

export default connect(mapStateToProps)(ProductListing);
