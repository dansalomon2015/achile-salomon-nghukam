import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const Container = styled.div`
    min-width: 20px;
    height: 20px;
    padding: 2px;
    border-width: 1px;
    border-color: ${(props) => (props.selected ? Colors.primary : Colors.bg_white)};
    border-style: solid;
    cursor: pointer;
    margin-right: 5px;
`;
const Color = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.bgColor};
`;

export default class ColorsButton extends Component {
    render() {
        const { color, selected, onClick } = this.props;
        return (
            <Container selected={selected} onClick={onClick}>
                <Color bgColor={color} />
            </Container>
        );
    }
}
