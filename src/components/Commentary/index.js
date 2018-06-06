import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Rating';
import './commentary.less';
import commentaryLikeSvg from '../../assets/ic_like_gray.svg';
import commentaryMoreSvg from '../../assets/more.svg';
let Commentary = (props) => (
    <li className="commentary">
        <div className="commentary-left">
            <img/>
        </div>
        <div className="commentary-right">
            <div className="commentary-right__top1">
                <span>豆瓣</span>
                <Rating showScore={false} score={10}/>
            </div>
            <div className="commentary-right__top2">2小时前</div>
            <p className="commentary-right__content">这是一个评论，这是一个评论，这是一个评论，这是一个评论，这是一个评论，这是一个评论，这是一个评论</p>
            <div className="commentary-right__bottom">
                <div className="right">
                    <span className="cicon cicon-like" dangerouslySetInnerHTML={{__html: commentaryLikeSvg}} ></span>
                    <span className="point">100</span>
                </div>
                <span className="cicon cicon-more" dangerouslySetInnerHTML={{__html: commentaryMoreSvg}} ></span>
            </div>
        </div>
    </li>
);

export default Commentary;