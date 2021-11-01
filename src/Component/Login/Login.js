import {connect} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../formValidate/postValidate";
import {reduxForm, Field} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {login} from "../../Redux/auth-reducer";

const Login = (props) => {
    const onSubmit = (formData) => {
        //props.login(formData.login, formData.password , formData.remember);
        //if first submit dont have remember atr
        if(!formData.remember){
            formData.remember = false;
        }
        //console.log(formData)
        props.login(formData.login, formData.password , formData.remember);
    }
    if (props.isAuth) {
        return <Redirect to = {'/news'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit = {onSubmit}/>
            <NavLink to={'/registration'}>Зарегистрируйтесь, если у вас нет аккаунта</NavLink>
        </div>
    )
}

let validateMaxLength =  maxLengthCreator(20);
let validateMinLength =  minLengthCreator(4);

const LoginFrom = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field placeholder = {'login'} name = {'login'} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
            </div>
            <div>
                <Field placeholder = {'password'} name = {'password'} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
            </div>
            <div>
                <Field component = {'input'} name = {'remember'} type = {'checkbox'}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm ({
    form:'login'
})(LoginFrom);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{login})(Login);