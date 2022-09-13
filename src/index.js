import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Cart, ProductDetails, ProductListing } from "./pages";
import { persistor, store } from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index path="/" element={<ProductListing />} />
                        <Route path="/:categoryName" element={<ProductListing />} />
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
);
