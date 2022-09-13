import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    currency: null,
    currencies: [],
    category: null,
    cart: [],
};

const appSlice = createSlice({
    name: "mystore",
    initialState,
    reducers: {
        storeCurrencies: (state, action) => {
            state.currencies = action.payload;
            if (!state.currency) state.currency = action.payload[0];
        },
        storeCurrency: (state, action) => {
            state.currency = action.payload;
        },
        storeCategories: (state, action) => {
            state.categories = action.payload;
            if (!state.category) state.category = action.payload[0];
        },
        selecteCategory: (state, action) => {
            state.category = action.payload;
        },
        addProduct: (state, action) => {
            let cart = state.cart || [];
            let product = action.payload;

            let temp = [];
            let isProductInCart = false;

            const produtsHaveSameAttributes = (p1, p2) => {
                const { attributes } = p1;
                // Products do not have attributes
                if (attributes.length === 0) return true;

                let output = true;
                attributes.forEach((attr) => {
                    const { name } = attr;
                    console.log(p1[name], p2[name]);
                    if (!(p1[name] === p2[name])) output = false;
                });

                return output;
            };

            cart.forEach((p) => {
                if (p.id === product.id) {
                    if (produtsHaveSameAttributes(p, product)) {
                        p.qty += 1;
                        isProductInCart = true;
                        temp.push(p);
                    } else {
                        // Same product but differents attributes
                        temp.push(p);
                    }
                } else {
                    //Not the same product
                    temp.push(p);
                }
            });
            if (!isProductInCart) temp.push(product);

            state.cart = temp;
        },
        incrementQty: (state, action) => {
            let temp = [];
            let product = state.cart[action.payload];
            product.qty = product.qty + 1;
            for (let index = 0; index < state.cart.length; index++) {
                if (index === action.payload) {
                    temp.push(product);
                } else {
                    temp.push(state.cart[index]);
                }
            }
            state.cart = temp;
        },
        decrementQty: (state, action) => {
            let temp = [];
            let product = state.cart[action.payload];
            if (product.qty > 0) product.qty = product.qty - 1;
            for (let index = 0; index < state.cart.length; index++) {
                if (index === action.payload) {
                    if (product.qty > 0) temp.push(product);
                } else {
                    temp.push(state.cart[index]);
                }
            }
            state.cart = temp;
        },
        updateAttribute: (state, action) => {
            let temp = [];
            let { attrName, value, productIndex } = action.payload;
            let product = state.cart[productIndex];
            product[attrName] = value;

            for (let index = 0; index < state.cart.length; index++) {
                if (index === productIndex) {
                    temp.push(state.cart[index]);
                } else {
                    temp.push(product);
                }
            }
        },
    },
});

export default appSlice;
