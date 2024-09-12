import client from "../config/client";

let products = {
    getSingleProduct: (idProduct) => {
        return client.get(`/products/${idProduct}`);
    },
    getProducts: (params) => {
        return client.get("/products", params);
    },
    getCategory: (params) => {
        return client.get("/products/category", params);
    }
};

export default products;
