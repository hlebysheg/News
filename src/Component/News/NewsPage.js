import {ModalContainer} from "./modalNews/ModalContainer";
import {News} from "./News";
import NW from './News.module.css'

export const NewsPage = (props) => {

    return (
        <>
            {!props.author?<button className={'btn btn-primary '+NW.btn} onClick={props.onMyPostsClick}>MyPosts</button>:
                <button className={'btn btn-danger '+NW.btn} onClick={props.onMyPostsClick}>{props.author}</button>}
            <News {...props.news}/>
            <div className={"d-grid gap-2"}>
                <button className={"btn btn-primary"} type={"button"} onClick={()=>props.onNextClick()}>View more</button>
            </div>
            <ModalContainer active = {props.modalActive} setActive = {props.setModalActive} onNewsAdd={props.onNewsAdd} author={props.news.login}/>
            <br/>
            <button className={'btn btn-outline-primary' } onClick={()=>props.setModalActive(true)}>Add Post</button>
            <br/>
            <br/>
        </>
    )
}