import React, { Component } from "react";
import styled from "styled-components";
import { Navbar, ProductCard } from "../components";

export const ProductList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ProductList>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductList>
            </div>
        );
    }
}
