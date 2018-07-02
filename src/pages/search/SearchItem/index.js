import React from 'react';
import {Link} from 'react-router-dom';
import './searchItem.less';

let SearchItem = ({title,titleColor,subTitle}) => {
    const bgstyle = titleColor && {color:titleColor};
    return(   
        <Link to={`#`} className="search-item">
            <span style={bgstyle && bgstyle} className="search-item__title">{title}</span>
            <span className="search-item__subtitle">{subTitle}</span>
        </Link>
    )
};

export default SearchItem;