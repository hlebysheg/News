import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../formValidate/postValidate";
import {reduxForm, Field} from "redux-form";
import {Input} from "../../common/FormControl/FormControl";
import {registration} from "../../Redux/auth-reducer";

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
            <h1>registration</h1>
            <ReduxregistrationForm onSubmit = {onSubmit}/>
            {props.isReg?<span>Registration complite</span>:<></>}
        </div>
    )
}

let validateMaxLength =  maxLengthCreator(20);
let validateMinLength =  minLengthCreator(4);

const RegistrationFrom = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field placeholder = {'login'} name = {'login'} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
            </div>
            <div>
                <Field placeholder = {'password'} name = {'password'} component = {Input}  validate = {[requiredField, validateMaxLength, validateMinLength]}/>
            </div>
            <div>
                <button>registration</button>
            </div>
        </form>
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