import {News} from "./News";
import {connect, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import {ModalContainer} from "./modalNews/ModalContainer";
import {addNewsAC, getNewsThunk, getNewsThunkNext} from "../../Redux/news-reducer";
import NW from './News.module.css'


//Тег автор хранится в локальном стейте, при переходе в текст новости  и обратно - обнуляется(вынести в гл стейт, если нужно пофиксить)
const NewsContainer = (props) => {

    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);
    let [author, setAuthor] = useState(null)

    useEffect(() => {
        if(props.news.length === 0){
            dispatch(getNewsThunk(props.startNews, props.endNews, author));
            //dispatch(getNewsThunk(0, 5, author));
        }
    },[])


    useEffect(() => {
        dispatch(getNewsThunk(0, 5, author))
    }, [author])

    const onNextClick = () => {
        dispatch(getNewsThunkNext(props.startNews+6, props.endNews+6, author))
    }

    const onMyPostsClick = () => {
        if(author){
            setAuthor(null)
        }

        else{
            setAuthor(props.login||'anon')
        }
        //dispatch(getNewsThunk(0, 5, author));
    }

    // const onNewsClick = (id) => {
    //
    // }
    return (
        <>
            {!author?<button className={'btn btn-primary '+NW.btn} onClick={onMyPostsClick}>MyPosts</button>:
                <button className={'btn btn-danger '+NW.btn} onClick={onMyPostsClick}>{author}</button>}
            <News {...props}/>
            <div className={"d-grid gap-2"}>
                <button className={"btn btn-primary"} type={"button"} onClick={()=>onNextClick()}>View more</button>
            </div>
            <ModalContainer active = {modalActive} setActive = {setModalActive} onNewsAdd={props.onNewsAdd} author={props.login}/>
            <br/>
            <button className={'btn btn-outline-primary' } onClick={()=>setModalActive(true)}>Add Post</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    news:state.news.news,
    startNews: state.news.startNews,
    endNews: state.news.endNews,
    login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
    onNewsAdd: (disk, theme, text) => { dispatch(addNewsAC(disk, theme, text)) },
    //getNews:(startNews, endNews)=>{dispatch(getNewsThunk(startNews, endNews))}
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);