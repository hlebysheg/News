import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../formValidate/postValidate";
import {reduxForm, Field} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {registration} from "../../Redux/auth-reducer";
import rg from './Registration.module.css';


let validateMaxLength =  maxLengthCreator(20);
let validateMinLength =  minLengthCreator(4);

const Registration = (props) => {
    const onSubmit = (formData) => {
        //props.registration(formData.registration, formData.password , formData.remember);
        //if first submit dont have remember atr

        //console.log(formData)
        props.registration(formData.login, formData.password);
    }
    if (props.isAuth) {
        return <Redirect to = {'/news'} />
    }
    return (
        <div>
            <h1>Registration</h1>
            <ReduxregistrationForm onSubmit = {onSubmit}/>
            {props.isReg?<span>Registration complite</span>:<></>}
        </div>
    )
}


const RegistrationFrom = (props) => {
    return (
        <div className={rg.body}>
            <form onSubmit = {props.handleSubmit} className={rg.form}>
                <div>
                    <Field placeholder = {'login'} name = {'login'} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
                </div>
                <div>
                    <Field placeholder = {'password'} name = {'password'} type={"password"} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
                </div>
                <div>
                    <button className={"btn btn-success"}>registration</button>
                </div>
            </form>
        </div>
    )
}

const ReduxregistrationForm = reduxForm ({
    form:'registration'
})(RegistrationFrom);

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isReg: state.auth.isReg
    }
}

export default connect(mapStateToProps,{registration})(Registration);