import {useEffect} from "react";
import {addNewsAC, getNewsThunk, getNewThunkText} from "../../Redux/news-reducer";
import {connect, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {Article} from "./Article";

const ArticleTextContainer = (props) => {
    const dispatch = useDispatch();
    const params = useParams()
    useEffect(() => {
        dispatch(getNewThunkText(params.newsId))
    }, [])
    return (
        <div>
            <Article
                disc = {props.articleRead.disc}
                theme = {props.articleRead.theme}
                date = {props.articleRead.date}
                text = {props.articleRead.text}
                author = {props.articleRead.username}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({
    articleRead: state.news.articleRead
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTextContainer);