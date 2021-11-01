import {reduxForm, Field} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../formValidate/postValidate";
import {Input, Textarea} from "../../../common/FormControl/FormControl";
// import {requiredField, maxLengthCreator, minLengthCreator} from '../../../formValidate'
//обработка формы
import Md from './Modal.module.css'

const max50 = maxLengthCreator(400);
const min1 = minLengthCreator(3);

let ModalForm = props => {
    const { handleSubmit, reset } = props
    return (
        <div className={Md.form}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="theme">Theme</label>
                <Field name="theme" component={Input} type="text" validate={[requiredField, max50, min1]}/>
            </div>
            <div>
                <label htmlFor="disc">disk</label>
                <Field name="disc" component={Input} type="text" validate={[requiredField, max50, min1]}/>
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <Field name="text" component={Textarea} type="text" validate={[requiredField, max50, min1]}/>
            </div>
            <button className={'btn btn-dark'}>Submit</button>
        </form>
        </div>
    )
}

ModalForm = reduxForm({
    // a unique name for the form
    form: 'modal'
})(ModalForm)

export default ModalForm