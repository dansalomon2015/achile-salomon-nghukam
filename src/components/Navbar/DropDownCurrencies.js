import React, { PureComponent } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";
import CurrencyItem from "./CurrencyItem";

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
    z-index: 101;
`;

export default class DropDownCurrencies extends PureComponent {
    getSelectedIndex = () => {
        const { selected, currencies } = this.props;
        let output = 0;
        if (selected) {
            for (let index = 0; index < currencies.length; index++) {
                const c = currencies[index];
                if (c.label === selected.label) {
                    output = index;
                    break;
                }
            }
        }

        return output;
    };

    render() {
        const { visible, innerRef, currencies } = this.props;

        if (visible && currencies)
            return (
                <Container ref={innerRef}>
                    {currencies.map((e, i) => {
                        return <CurrencyItem key={i + 1} selected={i === this.getSelectedIndex()} item={e} />;
                    })}
                </Container>
            );

        return null;
    }
}
