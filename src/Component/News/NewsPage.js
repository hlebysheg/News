import {ModalContainer} from "./modalNews/ModalContainer";
import {News} from "./News";
import NW from './News.module.css'
import {SearchForm} from "../../common/SearchForm/SearchForm";

export const NewsPage = (props) => {

    return (
        <>
            <SearchForm submit = {props.searchSubmit} author = {props.author} onMyPostsClick = {props.onMyPostsClick}/>
            <News {...props.news}/>
            <button className={"btn btn-dark"} type={"button"} onClick={()=>props.onNextClick()}>View more</button>
            <br/>
            <ModalContainer active = {props.modalActive} setActive = {props.setModalActive} onNewsAdd={props.onNewsAdd} author={props.news.login}/>
            <br/>
            <button className={"btn btn-outline-secondary" } onClick={()=>props.setModalActive(true)}>Add Post</button>
            <br/>
            <br/>
        </>
    )
}