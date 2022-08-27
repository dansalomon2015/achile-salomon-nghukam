import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Cart, ProductDetails } from "./pages";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import ProducList from "./components/ProducList";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route index path="" element={<ProducList />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="details/:productId" element={<ProductDetails />} />
                        </Route>

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
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
