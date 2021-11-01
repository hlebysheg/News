import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL : 'http://127.0.0.1:5000/',
});


export const NewsApi = {

    getNews(startNews, endNews, author){

        return fetch(`http://127.0.0.1:5000/get-news${author?'-by-tag':''}?start_id=${startNews}&end_id=${endNews}&username=${author}`, {
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(resp=>resp.json())
            // response = instance.get(`get-news?start_id=${startNews}&end_id=${endNews}`)
    },

    getNew(newsId){
        return fetch(`http://127.0.0.1:5000/get-new?newsId=${newsId}`, {
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(resp=>resp.json())
        // response = instance.get(`get-news?start_id=${startNews}&end_id=${endNews}`)
    },

    postNews(values){
        const json = JSON.stringify(values);
        return fetch(`http://127.0.0.1:5000/create-news`, {
            credentials: 'same-origin', // include, *same-origin, omit
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:json,
        }).then(resp=>resp.json())
        //return instance.post(`create-news`, json).then(resp=>resp.json())
    },

    login(login, password, rememberMe){
        let body = {};
        body.login = login;
        body.password = password;
        body.remember = rememberMe;
        const json = JSON.stringify(body);
        return fetch(`http://127.0.0.1:5000/login`, {
            credentials: 'same-origin', // include, *same-origin, omit
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:json,
        }).then(resp=>resp.json())
        //return instance.post(`create-news`, json).then(resp=>resp.json())
    },

    registration(login, password){
        let body = {};
        body.login = login;
        body.password = password;
        const json = JSON.stringify(body);
        return fetch(`http://127.0.0.1:5000/registration`, {
            credentials: 'same-origin', // include, *same-origin, omit
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:json,
        }).then(resp=>resp.json())
        //return instance.post(`create-news`, json).then(resp=>resp.json())
    },
    // init(){
    //     //credentials: 'include'
    //     return fetch(`http://127.0.0.1:5000/login`, {
    //         credentials: 'include', // include, *same-origin, omit
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //     }).then(resp=>resp.json())
    // }
}