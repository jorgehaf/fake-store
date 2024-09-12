import client from "../config/client";

let products = {
    getProducts: (params) => {
        return client.get("/products", params);
    },
    getCategory: (params) => {
        return client.get("/products/category", params);
    }
};

export default products;
