
function makePromise(url: string, options: any) {
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

function buildUrl(path: string) {
  return `$/api/${path}?nocache=${Math.random()}`;

}


export default {
  post: (path: string, body: any, options = {}) => makePromise(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'post',
    body: JSON.stringify(body)
  }),

  get: (path: string, options = {}) => makePromise(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'get'
  }),

  put: (path: string, body: any, options = {}) => makePromise(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'put',
    body: JSON.stringify(body)
  }),

  delete: (path: string, body: any, options = {}) => makePromise(buildUrl(path), {
    ...options,
    ...createDefaultOptions(),
    method: 'delete',
    body: JSON.stringify(body)
  })
};

