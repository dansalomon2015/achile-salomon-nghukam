import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { persistor, store } from "./store";
import { Colors } from "./utils";
import styled from "styled-components";
import { Home } from "./pages";
import { Cart } from "./pages";
import { Provider } from "react-redux";

const Container = styled.div`
    padding-inline: 80px;
    background-color: ${Colors.bg_white};
    margin-top: 100px;
`;

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Container>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route
                                    path="*"
                                    element={
                                        <main style={{ padding: "1rem", marginTop: "100px" }}>
                                            <p>There's nothing here!</p>
                                        </main>
                                    }
                                />
                            </Routes>
                        </BrowserRouter>
                    </Container>
                </PersistGate>
            </Provider>
        );
    }
}
