import React from 'react';
import './cell.less';
import {Link} from 'react-router-dom';
import Rating from '../../Rating';

//cell的图片
let CellImage = (props) =>{
    const style = {backgroundImage : `url(${props.image})`}
    return (
        <div className="item-cell-poster" style={style}></div>
    )
};

//cell title描述
let CellTitle = (props) => (
    <span className="item-cell-title">{props.title}</span>
);

//cell 底部控件
let CellRating = (props) => (
    <div className="item-cell-bottom">
        <Rating score={props.score} showScore={true}/>
    </div>
);

//cell 底部控件
let CellText = (props) => {
    return (
        <div className="item-cell-bottom" style={props.style}>
            {props.text}
        </div>
    )
};

//更加自定义的cell
let CellFrame = (props) => (
    <li className="item-cell">
        <Link to={props.url}>
            {props.children}
        </Link>
    </li>
);

//简化的cell
let Cell = (props) => {
    return (   
        <CellFrame url={props.url}>
            <CellImage image={props.image}/>
            <CellTitle title={props.title}/>
            {props.children}
        </CellFrame>
    )
};

export {CellImage,CellTitle,CellRating,CellText,Cell,CellFrame};