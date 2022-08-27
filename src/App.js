import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { Colors } from "./utils";
import styled from "styled-components";
import { Navbar } from "./components";
import Loader from "./components/Navbar/Loader";

const Container = styled.div`
    padding-inline: 80px;
    background-color: ${Colors.bg_white};
    margin-top: 100px;
`;

export default class App extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Outlet />
                <Loader />
            </Container>
        );
    }
}
