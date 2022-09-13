import React, { PureComponent } from "react";
import styled from "styled-components";
import { Colors } from "../../utils";

const Container = styled.div`
    min-width: ${(props) => props.width || `20px`};
    height: ${(props) => props.width || `20px`};
    padding: 2px;
    border-width: 1px;
    border-color: ${(props) => (props.selected ? Colors.primary : Colors.bg_white)};
    border-style: solid;
    cursor: ${(props) => (props.onClick ? `pointer` : `auto`)};
    margin-right: 5px;
`;
const Color = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.bgColor};
`;

export default class ColorsButton extends PureComponent {
    render() {
        const { color, selected, onClick, width } = this.props;
        return (
            <Container selected={selected} width={width} onClick={onClick}>
                <Color bgColor={color} />
            </Container>
        );
    }
}
