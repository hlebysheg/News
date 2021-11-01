import  React from 'react';
//onButtonClick для смены текста если понадобитя(disp to props)
export const About = (props) => {

    return (
        <div>
            {props.aboutText}
        </div>
    )
}