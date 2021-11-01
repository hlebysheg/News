import {NavLink} from "react-router-dom";
import React from 'react';
import Hd from './Header.module.css';
export const Header = (props) => {

    return (
        <div className={Hd.header}>
            <div className={Hd.container} >
                <NavLink to={'/news'} activeClassName={Hd.active}>News</NavLink>
            </div>
            <div className={Hd.container}>
                <NavLink to={'/about_us' } activeClassName={Hd.active}>About us</NavLink>
            </div>
            <div className={Hd.login}>
                {props.auth ?<span>{props.login} <button onClick={props.logout} className={"btn btn-danger"}>logout</button></span>
                    :<NavLink to = {'/login'} activeClassName={Hd.active}>Login</NavLink>}
            </div>
        </div>
    );
}