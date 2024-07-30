export const _fetch = async (url, method, data, header) => {
    const LoginToken = localStorage.getItem("token");

    if (method === 'get' || method === 'GET') {
        return fetch(url,
            {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": LoginToken,
                },

            })
            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }

            })
        // .done();
    } else if (method === 'patch' || method === 'PATCH') {
        return fetch(url,
            {
                method: method,
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json',
                    "Authorization": "Bearer " + LoginToken,
                },
                body: data,

            })
            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }

            })
        // .done();
    } else if (method === 'delete' || method === 'DELETE') {
        return fetch(url,
            {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + LoginToken,
                },
                body: JSON.stringify(data),

            })
            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }

            })
        // .done();
    } else {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + LoginToken,

            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                return { 'status': 0, 'message': 'Something went wrong, ERROR: ' + error }

            })
    }

}
export default _fetch;
