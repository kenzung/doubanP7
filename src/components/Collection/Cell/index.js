import React from 'react';
import './cell.less';
import {Link} from 'react-router-dom';
import Rating from '../../Rating';

let Cell = (props) => {
    const style = {backgroundImage : `url(${props.cellItem.images.small})`}
    return (
        <li className="item-cell">
            <Link to="#">
                <div className="item-cell-poster" style={style}></div>
                <span className="item-cell-title">{props.cellItem.title}</span>
                <div className="item-cell-bottom">
                    <Rating score={props.cellItem.rating.average} showScore={true}/>
                </div>
            </Link>
        </li>
    )
};

export default Cell;