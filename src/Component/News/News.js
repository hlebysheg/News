import {Post} from "./post/Post";
import Nw from './News.module.css'
// import ModalContainer from "./modalNews/ModalContainer";

export const News = (props) => {

    const newEl =  props.news.map(el =>  <Post disc ={el.disc}
                                               date ={el.date}
                                               theme ={el.theme}
                                               key = {el.id}
                                               id = {el.id}
                                               author={el.username}/>)
    return (
        <>
            <div className={Nw.container}>
                {newEl}
            </div>
        </>
    )
}