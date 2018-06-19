import React from 'react';
import Rating from '../Rating';
import './summary.less';

let Summary = (props)=>{
    if (Object.keys(props).length === 0) {
        return (
            <section className="summary"></section>
        );
    }else{
        const { title, score, ratingsCount, img, intro} = props;
        return (
            <section className="summary">
                <h1>{title}</h1>
                <div className="summary-info">
                    <div className="summary-info__right">
                        <img alt={title} src={img} />
                    </div>
                    <div className="summary-info__left">
                        <div className="title">
                            <Rating score={score} />
                            <span className="title-commentary">
                                {ratingsCount}人评价
                            </span>
                        </div>
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