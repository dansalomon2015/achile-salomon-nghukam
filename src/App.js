import React, { PureComponent } from "react";
import { Outlet } from "react-router-dom";
import { Colors } from "./utils";
import styled from "styled-components";
import { Loader, Navbar } from "./components";

const Container = styled.div`
    padding-inline: 80px;
    background-color: ${Colors.bg_white};
    margin-top: 100px;
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 100%;
    max-width: 1440px;
`;

export default class App extends PureComponent {
    render() {
        return (
            <Container>
                <Content>
                    <Navbar />
                    <Outlet />
                    <Loader />
                </Content>
            </Container>
        );
    }
}
