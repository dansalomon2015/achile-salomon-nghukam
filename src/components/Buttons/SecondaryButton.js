import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const Button = styled.div`
    height: ${(props) => props.height || `38px`};
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
    margin-right: ${(props) => props.mr || `0px`};
    margin-left: ${(props) => props.ml || `0px`};
    cursor: pointer;
    & a:hover {
        text-decoration: none;
        color: inherit;
    }
    & a:focus {
        text-decoration: none;
        color: inherit;
    }
    & a:active {
        text-decoration: none;
        color: inherit;
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
`;

export default class SecondaryButton extends Component {
    render() {
        const { title, onClick, children, mr, ml } = this.props;
        return (
            <Button mr={mr} ml={ml} onClick={onClick}>
                {title ? title : children}
            </Button>
        );
    }
}
