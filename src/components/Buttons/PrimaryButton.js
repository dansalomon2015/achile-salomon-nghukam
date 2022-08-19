import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const Button = styled.div`
    height: ${(props) => props.height || `40px`};
    width: ${(props) => props.width || `135px`};
    background-color: ${Colors.primary};
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
    color: ${Colors.text_white};
    cursor: pointer;
`;

export default class PrimaryButton extends Component {
    render() {
        const { title, onClick } = this.props;
        return <Button onClick={onClick}>{title}</Button>;
    }
}
