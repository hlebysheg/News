
import {NewsApi} from "../api/news-api";
//reducers command
//action const
const ADD_NEWS = '/news/ADD-NEWS';//пока нет общение с сервером добавляем новость напрямпую
const GET_NEWS = '/news/GET-NEWS';//получение новостей из сервера
const SET_LAST_ID = '/news/SET-LAST-ID';//получение айдишника у последнего элемента
const SET_NEWS_NUMBER = '/news/SET-NEWS-NUMBER';//установка значений стартовой и конечной новости
const SET_ARTICLE = '/news/SET-ARTICLE';
const RESET_NEWS = '/news/RESET-NEWS';
//initial state
let initial = {
    news:[],
    len:2,
    startNews:0,
    endNews:5,
    lastId:0,
    articleRead:{}//новость, которую сейчас просматривают(тк хранить текст для каждой новости не оптимально
};
//reducer
export const newsReducer = (state = initial, action) => {
    //пока искуственно добавляем в новости
    if (action.type == ADD_NEWS){
        let news = [action.news, ...state.news];
        return {
            ...state,
           news: news
        }
    }

    if(action.type == GET_NEWS){
        let news = [...state.news,...action.news]
        //let news = [...action.news]
        return {
            ...state,
            news:news,
        }
    }

    if(action.type == SET_NEWS_NUMBER){
        return {
            ...state,
            startNews: action.startNews,
            endNews: action.endNews,
        }
    }

    if(action.type == SET_ARTICLE) {
        return {
            ...state,
            articleRead: action.articleRead
        }
    }

    if(action.type == RESET_NEWS){
        return {
            ...state,
            news:[]
        }
    }

    return state
}

//actionCreators
export const addNewsAC = (disc, theme, text, date, id, username) => {
    let news = {
        disc:disc,
        theme:theme,
        date:date,
        //text:text,тк текста будет много,то не вижу смысла хранить для каждой новости
        id:id,
        username: username,
    }
    return {
        type: ADD_NEWS,
        news: news,
    }
}

export const setArticleReadAC = (disc, theme, text, date, id, username) => {
    let article = {
        disc: disc,
        theme: theme,
        date: date,
        text: text,
        id: id,
        username: username,
    }
    return {
        type: SET_ARTICLE,
        articleRead: article,
    }
}

export const getNewsAC = (news) => {
    return {
        type:GET_NEWS,
        news:news,
    }
}

export const resetNewsAC = () => {
    return {
        type:RESET_NEWS,
    }
}

export const setNewsAC  = (startNews, endNews) => {
    return {
        type: SET_NEWS_NUMBER,
        startNews: startNews,
        endNews: endNews,
    }
}

//thunks
export const getNewsThunk = (startNews, sendNews, author) =>  {
    return (dispatch) => {
        NewsApi.getNews(startNews, sendNews, author).then(response=> {
            dispatch(resetNewsAC())
            dispatch(setNewsAC(startNews, sendNews));
            dispatch(getNewsAC(response));
        })
    }
};

export const postNewThunk = (values) => {
    return (dispatch) => {
        NewsApi.postNews(values).then(response=>{
            if(response.success === true) {
                dispatch(addNewsAC(values.disc, values.theme, values.textarea, response.last_news_date, response.last_news_id, values.author?values.author:'anon'))
            }
        })
    }
}

export const getNewsThunkNext = (startNews, sendNews, author) =>  {
    return (dispatch) => {
        dispatch(setNewsAC(startNews, sendNews));
        NewsApi.getNews(startNews, sendNews, author).then(response=> {
            dispatch(getNewsAC(response));
        })
    }
};

export const getNewThunkText = (newsId) =>  {
    return (dispatch) => {
        NewsApi.getNew(newsId).then(response=> {
            console.log(response[0])
            dispatch(setArticleReadAC(response[0].disc, response[0].theme, response[0].text, response[0].date, response[0].id, response[0].username))
        })
    }
};