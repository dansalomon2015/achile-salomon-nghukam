import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Colors } from "../../utils";
import ErrorBoundary from "../ErrorBoundary";
import DropDownCurrencies from "./DropDownCurrencies";

const Container = styled.div`
    padding-inline: 10px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &::after {
        position: relative;
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-right: 1px solid ${Colors.dark};
        border-top: 1px solid ${Colors.dark};
        transform: ${(props) => (props.dropdownVisible ? `rotate(${-45}deg)` : `rotate(${135}deg)`)};
        margin-left: 10px;
        top: ${(props) => (props.dropdownVisible ? `10px` : `5px`)};
    }
    display: flex;
    justify-content: center;
`;

class DropDownHandler extends PureComponent {
    render() {
        const { innerRef, onClick, dropdownVisible, currencies, currency, dropDownRef } = this.props;
        return (
            <Container onClick={() => onClick()} ref={innerRef}>
                {currency ? currency.symbol : ""}
                <ErrorBoundary message="An error occurs with the currency list">
                    <DropDownCurrencies
                        visible={dropdownVisible}
                        selected={currency}
                        innerRef={dropDownRef}
                        currencies={currencies}
                    />
                </ErrorBoundary>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { currencies: state.mystore.currencies, currency: state.mystore.currency };
};

export default connect(mapStateToProps)(DropDownHandler);
