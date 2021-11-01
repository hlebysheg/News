import Md from './Modal.module.css'
import ModalForm from "./ModalForm";
import {reset} from "redux-form";
import * as axios from 'axios';
import {NewsApi} from "../../../api/news-api";
import {postNewThunk} from "../../../Redux/news-reducer";
import {useDispatch} from "react-redux";
//(disk, theme, text)

const instance = axios.create({
    withCredentials: true,
    baseURL : 'http://127.0.0.1:5000/',
});

export const ModalContainer = (props) => {

    const dispatch = useDispatch();

    const addPost = (values) => {
        values.author = props.author;
        dispatch(postNewThunk(values))
    }

    const  submit =  (values, dispatch) => {
        //props.onNewsAdd(values.disc, values.theme, values.text);
        addPost(values)
        dispatch(reset('modal'));
    }
    return (
        <>
            <div className={Md.container}  hidden={!props.active}>
                <div className={Md.modal}>
                    <ModalForm onSubmit={submit} />
                </div>
                <button onClick={()=>props.setActive(false)} className={'btn-close'}></button>
            </div>
            <div className={Md.fixOverlay} hidden={!props.active}></div>
        </>
    )
}
