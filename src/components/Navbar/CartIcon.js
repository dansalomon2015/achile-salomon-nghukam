import React, { PureComponent } from "react";
import styled from "styled-components";
import { Images } from "../../assets";
import { Colors } from "../../utils";

const Container = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Counter = styled.div`
    background-color: ${Colors.dark};
    position: absolute;
    right: -15px;
    top: -10px;
    text-align: center;
    border-radius: 30px;
    color: ${Colors.text_white};
    font-size: 14px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default class CartIcon extends PureComponent {
    render() {
        const { count, onClick, innerRef } = this.props;
        return (
            <Container onClick={onClick} ref={innerRef}>
                <img width={20} src={Images.Cart} alt="Cart icon" />
                {!!count && <Counter>{count}</Counter>}
            </Container>
        );
    }
}
