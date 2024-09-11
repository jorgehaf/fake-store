import client from "../config/client";

let products = {
    get: (params) => {
        return client.get("/products", params);
    }
};

export default products;
