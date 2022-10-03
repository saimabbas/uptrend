let server = "http://localhost:4000/public/get"
let hostname = "http://localhost:4000/"

const dataAPI = {
    getInfluencers: () => {
        const requestOptions = {method: 'GET', redirect: 'follow'};
        return fetch(`${server}/influencers`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    },
    getMedia: () => {
        const requestOptions = {method: 'GET', redirect: 'follow'};
        return fetch(`${server}/media-posts`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    },
    getAllArticles: () => {
        const requestOptions = {method: 'GET', redirect: 'follow'};
        return fetch(`${server}/blog-posts`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    },
    getSingleArticle: (id) => {
        const requestOptions = {method: 'GET', redirect: 'follow'};
        return fetch(`${server}/blog-posts/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => error);
    }


}

export {dataAPI, server, hostname};

