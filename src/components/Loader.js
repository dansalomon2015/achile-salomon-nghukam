import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCategories, getCurrencies } from "../api";
import { storeCategories, storeCurrencies } from "../store";
import { Colors } from "../utils";

export const Mask = styled.div`
    background-color: ${Colors.bg_white};
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 103;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currenciesLoaded: false,
            categoriesLoaded: false,
        };

        this.dispatch = this.props.dispatch;
    }

    componentDidMount() {
        getCurrencies()
            .then((data) => {
                if (Array.isArray(data.currencies)) {
                    this.dispatch(storeCurrencies(data.currencies));
                    this.setState({ currenciesLoaded: true });
                }
            })
            .catch((e) => alert("Error fetching currencies " + e));

        getCategories()
            .then((data) => {
                if (Array.isArray(data.categories)) {
                    this.dispatch(storeCategories(data.categories));
                    this.setState({ categoriesLoaded: true });
                }
            })
            .catch((e) => alert("Error fetching categories " + e));
    }

    render() {
        if (!this.state.currenciesLoaded || !this.state.categoriesLoaded) return <Mask>Loading...</Mask>;

        return null;
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(Loader);
