import React from 'react';
import './cell.less';
import Rating from '../../Rating';

let Cell = (props) => {
    const style = {backgroundImage : `url(${props.image})`}
    return (
        <li className="item-cell">
            <a>
                <div className="item-cell-poster" style={style}></div>
                <span className="item-cell-title">{props.title}</span>
                <div className="item-cell-bottom">
                    <Rating score={props.score} showScore={true}/>
                </div>
            </a>
        </li>
    )
};

export default Cell;