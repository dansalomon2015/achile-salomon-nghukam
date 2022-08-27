import React, { Component } from "react";
import { ProductList } from "../../components";

class ProductListing extends Component {
    componentDidMount() {
        console.log("wewfw");
    }
    render() {
        return (
            <div>
                <ProductList />
            </div>
        );
    }
}

export default ProductListing;
