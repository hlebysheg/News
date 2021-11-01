import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

const HeaderContainer = (props) => {

    return (
        <Header auth = {props.isAuth} login = {props.login} logout = {props.logout}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps,{logout})(HeaderContainer);