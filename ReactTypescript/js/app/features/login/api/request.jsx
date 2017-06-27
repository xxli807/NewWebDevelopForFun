function makePromise(url, options) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error('There is no URL provided for the request.'));
        }
        if (!options) {
            reject(new Error('There are no options provided for the request.'));
        }
        fetch(url, options)
            .then(response => {
            if (!response.ok) {
                return reject(response);
            }
            return response;
        })
            .catch(error => {
            reject(error);
        });
    });
}
function createDefaultOptions() {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    return {
        headers
    };
}
function buildUrl(path) {
    return `$/api/${path}?nocache=${Math.random()}`;
}
export default {
    post: (path, body, options = {}) => makePromise(buildUrl(path), Object.assign({}, options, createDefaultOptions(), { method: 'post', body: JSON.stringify(body) })),
    get: (path, options = {}) => makePromise(buildUrl(path), Object.assign({}, options, createDefaultOptions(), { method: 'get' })),
    put: (path, body, options = {}) => makePromise(buildUrl(path), Object.assign({}, options, createDefaultOptions(), { method: 'put', body: JSON.stringify(body) })),
    delete: (path, body, options = {}) => makePromise(buildUrl(path), Object.assign({}, options, createDefaultOptions(), { method: 'delete', body: JSON.stringify(body) }))
};
//# sourceMappingURL=C:/Users/xin/Documents/GitHub/NewWebDevelopForFun/ReactTypescript/mapFiles/app/features/logIn/api/request.jsx.map