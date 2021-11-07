import {useState} from "react";
import sf from "./SearchForm.module.css";

export const SearchForm = (props) => {

    let [value, setValue] = useState('')
    return (
        <div className={sf.container}>
            <input value={value} onChange={e=>setValue(e.target.value)} className={"form-control "+ sf.input} placeholder={'search'}/>
            <button onClick={()=>props.submit(value)} className={'btn btn-dark'}>Search</button>
            {!props.author?<button className={'btn btn-dark'} onClick={()=>props.onMyPostsClick()}>MyPosts</button>
                : <button className={'btn btn-danger'} onClick={()=>props.onMyPostsClick()}>{props.author}</button>}
        </div>
    )
}