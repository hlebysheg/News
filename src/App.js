import './App.css';
import Header from "./Component/Header/HeaderContainer";
import {BrowserRouter, Route} from "react-router-dom";
import NewsContainer from "./Component/News/NewsContainer";
import AboutContainer from "./Component/About/AboutContainer";
import ArticleTextContainer from "./Component/ArticleText/ArticleTextConteiner";
import Login from "./Component/Login/Login";
import {login} from "./Redux/auth-reducer";
import {useDispatch} from "react-redux";
import Registration from "./Component/Registration/Registration";
import {useEffect} from "react";
import {getNewsThunk} from "./Redux/news-reducer";


function App(props) {
    const dispatch = useDispatch();
    let userLogin = getCookie('login');
    let password = getCookie('password');
    useEffect(() => {
        dispatch(login(userLogin, password, true))
    },[])
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <div className= "Body">
                    <Route path="/news" render={() => <NewsContainer/>} />
                    <Route path="/about_us" render={() => <AboutContainer/>} />
                    <Route path="/article/:newsId" render={()=> <ArticleTextContainer/>}/>
                    <Route path="/login" render={() => <Login/>} />
                    <Route path="/registration" render={() => <Registration/>} />
                </div>
                <div className="Footer" >
                    Foter
                </div>
            </div>
        </BrowserRouter>
    );
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
export default App;
