import {connect} from 'react-redux';
import {aboutBtnAC} from "../../Redux/about-reducer";
import {About} from "./About";

const AboutContainer = (props) => {
    return (
        <>
            <About {...props}/>
        </>
    )
}

const mapStateToProps = (store) => ({
    aboutText:store.about.aboutText,
});

const mapDispatchToProps = (dispatch) => ({
    onBtnClick: (text) => {dispatch(aboutBtnAC(text))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);