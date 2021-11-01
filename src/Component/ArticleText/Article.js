import at from './Article.module.css';

export  const Article = (props)=> {

    return (
        <div className={at.container}>
            <div className={at.topic}>
                <span className={at.date}>Date: {props.date}</span><br/>
                <span className={''}>description: {props.disc}</span><br/>
                <span className={''}>author: {props.author}</span><br/>
            </div>
                {/*<span className={at.disc}>{props.disc}</span><br/>*/}
            <div className={at.main}>
                <br/>
                <span className={at.theme}>{props.theme}</span><br/>
                <span className={at.text}>{props.text}</span><br/>
            </div>
        </div>

    )
}