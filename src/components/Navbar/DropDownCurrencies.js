import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const currencies = [
    {
        sign: "$",
        name: "USD",
    },
    {
        sign: "€",
        name: "EUR",
    },
    {
        sign: "¥",
        name: "JPY",
    },
];

const Container = styled.div`
    background-color: ${Colors.bg_white};
    padding-top: 5px;
    padding-bottom: 5px;
    position: fixed;
    top: 65px;
    right: 78px;
    width: 114px;
    -webkit-box-shadow: 5px 5px 32px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 32px 3px rgba(0, 0, 0, 0.05);
`;

const CurrencyItem = styled.div`
    font-weight: 500;
    font-size: 18px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${(props) => (props.selected ? Colors.bg_grey : Colors.bg_white)};
`;

export default class DropDownCurrencies extends Component {
    render() {
        return (
            <Container ref={this.props.innerRef}>
                {currencies.map((e, i) => {
                    return (
                        <CurrencyItem key={i + 1} selected={i === 1 ? true : false}>
                            {e.sign} {e.name}
                        </CurrencyItem>
                    );
                })}
            </Container>
        );
    }
}
