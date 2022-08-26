import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";
import { connect } from "react-redux";
import { storeCurrency } from "../../store";

const Container = styled.div`
    font-weight: 500;
    font-size: 18px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${(props) => (props.selected ? Colors.bg_grey : Colors.bg_white)};
    cursor: pointer;
`;

class CurrencyItem extends Component {
    constructor(props) {
        super(props);
        this.changeCurrency = this.changeCurrency.bind(this);
    }

    changeCurrency() {
        this.props.dispatch(storeCurrency(this.props.item));
    }

    render() {
        const { item, selected } = this.props;
        return (
            <Container selected={selected} onClick={this.changeCurrency}>
                {item.symbol} {item.label}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(CurrencyItem);
