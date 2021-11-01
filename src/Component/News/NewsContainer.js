import {connect, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import {addNewsAC, getNewsThunk, getNewsThunkNext} from "../../Redux/news-reducer";
import {NewsPage} from "./NewsPage";


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


    return (
        <>
            <NewsPage author = {author}
                      onMyPostsClick={onMyPostsClick}
                      news={props} onNextClick = {onNextClick}
                      modalActive = {modalActive}
                      setModalActive = {setModalActive}
                      setAuthor={setAuthor} />
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

