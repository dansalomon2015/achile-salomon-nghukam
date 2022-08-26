import { GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCTS_CATEGORY, GET_PRODUCT_DETAILS } from "./Queries";

const makeRequest = async (query, variables = undefined) => {
    return fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ query, variables }),
    })
        .then((r) => r.json())
        .then((result) => {
            return result.data;
        });
};

export const getCurrencies = async () => {
    return makeRequest(GET_CURRENCIES);
};

export const getCategories = async () => {
    return makeRequest(GET_CATEGORIES);
};

export const getProductsByCategory = async (category) => {
    return makeRequest(GET_PRODUCTS_CATEGORY, { category });
};

export const getProductDetails = async (productId) => {
    return makeRequest(GET_PRODUCT_DETAILS, { id: productId });
};
