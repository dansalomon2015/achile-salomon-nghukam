export const GET_CURRENCIES = `
    {
        currencies {
            label
            symbol
        }
    }
`;

export const GET_CATEGORIES = `
    {
        categories{
            name
        }
    }
`;

export const GET_PRODUCTS_CATEGORY = `
    query Category($category : String!) {
        category(input : { title : $category}) {
            products{
                id
                name
                brand
                prices{
                    currency {
                        label
                    }
                    amount
                }
                gallery
                inStock
            }
        }
    }
`;

export const GET_PRODUCT_DETAILS = `
    query Product($id : String!) {
        product(id : $id){
            id
            name
            prices {
                currency {
                    label
                }
                amount
            }
            brand
            description
            description
            attributes {
                name
                type
                items {
                    displayValue
                    value
                }
            }
            gallery
            inStock
        }
    }
`;
