import http from "./http";

const client = {
    post: async (url, payload) => {
        return new Promise((resolve, reject) => {
            http
                .post(url, payload)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response);
                });
        });
    },

    put: async (url, payload) => {
        return new Promise((resolve, reject) => {
            http
                .put(url, payload)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response);
                });
        });
    },

    get: (url, params) => {
        return new Promise((resolve, reject) => {
            http
                .get(url, {
                    params: params
                })
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response);
                });
        });
    },

    delete: async (url, params) => {
        return new Promise((resolve, reject) => {
            http
                .delete(url + "/" + params)
                .then((suc) => {
                    resolve(suc.data);
                })
                .catch((err) => {
                    reject(err.response);
                });
        });
    },
};

export default client;
