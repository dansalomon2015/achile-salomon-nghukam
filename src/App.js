import React, { Component } from "react";
import styled from "styled-components";
import { Home } from "./pages";
import { Colors } from "./utils";

const Container = styled.div`
    padding-inline: 80px;
    background-color: ${Colors.bg_white};
    margin-top: 100px;
`;

export default class App extends Component {
    render() {
        return (
            <Container>
                <Home />
            </Container>
        );
    }
}
