import React from 'react';
import './summary.less';

let Summary = (props)=>{
    if (Object.keys(props).length === 0) {
        return (
            <section className="summary"></section>
        );
    }else{
        const { title, img, intro} = props;
        return (
            <section className="summary">
                <h1>{title}</h1>
                <div className="summary-info">
                    <div className="summary-info__right">
                        <img alt={title} src={img} />
                    </div>
                    <div className="summary-info__left">
                        {props.children}
                        <p>
                            {intro}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Summary;