import Pt from './Post.module.css';
import {NavLink} from "react-router-dom";
// <Post disc ={el.disc} date ={el.date} theme ={el.theme}
export const Post = (props) => {
    return (
        <NavLink to={`/article/${props.id}`}>
        <div className={Pt.container} draggable={"true"}>
             <div className={Pt.post} >
                  <ul className={Pt.date} >дата:   {props.date}</ul>
                  <ul className={Pt.theme}>Тема:   {props.theme}</ul>
                  <ul className={Pt.disc}>Описание:   {props.disc}</ul>
                  <ul className={Pt.disc}>Автор:   {props.author}</ul>
             </div>
        </div>
        </NavLink>
    )
}
//<NavLink to={`http://localhost:3000/article/${props.id}`}>