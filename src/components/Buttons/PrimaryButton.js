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
    margin-right: ${(props) => props.mr || `0px`};
    margin-left: ${(props) => props.ml || `0px`};
    margin-bottom: ${(props) => props.mb || `0px`};
    margin-top: ${(props) => props.mt || `0px`};
`;

export default class PrimaryButton extends Component {
    render() {
        const { title, onClick, mr, ml, mt, width, mb, height } = this.props;
        return (
            <Button mr={mr} ml={ml} mt={mt} mb={mb} width={width} height={height} onClick={onClick}>
                {title}
            </Button>
        );
    }
}
