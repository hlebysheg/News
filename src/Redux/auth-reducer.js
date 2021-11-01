import {NewsApi} from "../api/news-api";
import {stopSubmit} from "redux-form";

const LOGIN_HEADER = '/auth/LOGIN-HEADER';
const IS_REG_ON = '/auth/IS_REG_ON';

let initial = {
    userId: null,
    login: null,
    isAuth: false,
    isReg: false,
}

export const authReducer = (state = initial, action) => {
    //пока искуственно добавляем в новости
    if (action.type == LOGIN_HEADER){
        return {
            ...state,
            ...action.data
        }
    }

    if (action.type == IS_REG_ON){
        return {
            ...state,
            isReg: action.isReg,
        }
    }

    return state
}


//ACTION creators
export  const loginAC = (login, id, isAuth) => {

    return {
        type: LOGIN_HEADER,
        data:{
            userId: id,
            isAuth: isAuth,
            login: login,
        },
    }
}

export  const regAC = (login, id, isAuth) => {

    return {
        type: IS_REG_ON,
        isReg: true,
    }
}

//thunk
export const login = (login, password, rememberMe) => {

    return (dispatch) => {
        NewsApi.login(login, password, rememberMe).then(response => {
            //userAPI.setUserData().then(response => {
            if(response.resultCode === 0) {
                let action = stopSubmit('login', {
                    email: 'login or password is wrong',
                    password: 'login or password is wrong'
                });
                dispatch(action);
            }
            //console.log(response)
            if(response.resultCode === 1) {
                dispatch(loginAC(response.login, response.id, true))
            }
            document.cookie = "password="+password;
            document.cookie = "login="+login;
            // document.cookie = "password="+password;
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(loginAC(null, null, false));
        deleteAllCookies();
    }
}

function deleteAllCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export const registration = (login, password) => {

    return (dispatch) => {
        NewsApi.registration(login, password).then(response => {

            //userAPI.setUserData().then(response => {
            if(response.resultCode === 0) {
                let action = stopSubmit('registration', {
                    email: 'login is used',
                    password: 'login is used'
                });
                dispatch(action);
            }
            //console.log(response)
            if(response.resultCode === 1) {
                dispatch(regAC())
            }
            // document.cookie = "password="+password;
            // document.cookie = "login="+login;
            // document.cookie = "password="+password;
        });
    }
}

// export const init = () => {
//
//     return (dispatch) => {
//         NewsApi.init().then(response => {
//             //userAPI.setUserData().then(response => {
//
//             if(response.resultCode === 0) {
//
//             }
//             //console.log(response)
//             if(response.resultCode === 1) {
//                 dispatch(loginAC(response.login, response.id, true))
//             }
//             //document.cookie = "login="+login +";"+ "password="+password;
//             // document.cookie = "password="+password;
//         });
//     }
// }