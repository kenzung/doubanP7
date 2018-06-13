import React, { Component } from 'react';
import Rating from '../Rating';
import './summary.less';

export default class Summary extends Component {
    //组装简介
    assembleIntroduction(){
        
    }
    render() {
        return (
            <section className="summary">
                <h1>这个是标题</h1>
                <div className="summary-info">
                    <div className="summary-info__right">
                        <img alt="测试" />
                    </div>
                    <div className="summary-info__left">
                        <div className="title">
                            <Rating score={8.7} />
                            <span className="title-commentary">
                                0人评价
                            </span>
                        </div>
                        <p>84分钟 / 剧情 / 战争 / 科幻 / 安彦良和(导演) / 今西隆志(导演) / 池田秀一 / 潘惠美 / 三宅健太 / 2017-09-02(日本) 上映</p>
                    </div>
                </div>
            </section>
        )
    }
}