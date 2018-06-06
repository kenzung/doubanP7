import React from 'react';
import './rating.less';
export default (props) => {
    const score = props.score;
    const starForCountArray = (score / 2).toFixed(1).split('.');
    //初步计算有颜色的星星数目
    let starFullCount = parseInt(starForCountArray[0], 10);
    //初步计算没有颜色的星星数目
    let starEmptyCount = 5 - starFullCount;
    //初始化一半颜色的星星数
    let starHalfCount = 0;
    //取小数位
    const rest = parseInt(starForCountArray[1], 10);
    if(rest >= 4 && rest <= 6){
        starHalfCount = 1;
        starEmptyCount--;
    }
    if(rest > 6){
        starFullCount++;
        starEmptyCount--;
    }

    let starFull = [];
    let starEmpty = [];
    let starHalf;
    for(let i = 0; i < starFullCount; i++){
        starFull.push(<span className="rating-star rating-star__full" key={'full'+i}></span>);
    }
    if(starHalfCount > 0){
        starHalf = <span className="rating-star rating-star__half"></span>;
    }
    for(let i = 0; i < starEmptyCount; i++){
        starEmpty.push(<span className="rating-star rating-star__empty" key={'empty'+i}></span>);
    }
    const showScore = {
        display: props.showScore ? 'inline-block' : 'none'
    };
    return (
        score > 0 ? (
            <div className="rating">
                <div>
                    {starFull}
                    {starHalf && starHalf}
                    {starEmpty}
                </div>
                <span style={showScore}>
                    {props.score}
                </span>
            </div>
        ) : (
                <div className="rating">暂无评分</div>
            )
    )
};