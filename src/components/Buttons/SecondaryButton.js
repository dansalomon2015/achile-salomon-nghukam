import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const Button = styled.div`
    height: ${(props) => props.height || `40px`};
    width: ${(props) => props.width || `135px`};
    background-color: ${Colors.bg_white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: ${Colors.dark};
    border: 1px solid ${Colors.dark};
    cursor: pointer;
`;

export default class SecondaryButton extends Component {
    render() {
        const { title, onClick, children } = this.props;
        return <Button onClick={onClick}>{title ? title : children}</Button>;
    }
}
