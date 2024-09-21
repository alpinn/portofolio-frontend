import instance from "./axios";

export function axiosRequest(method, urlPath, data) {
    return instance ({
        method,
        url: urlPath,
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    })
    .then((res) => res.data.data)
    .catch((err) => {
        console.log('---error---');
        console.log(err?.response?.data.data);
    })
}