import React from 'react';
import {Link} from 'react-router-dom';
import './sort.less';

let SortItem = (props) => (
    <li className="sort-item">
        <Link to="/">
            {props.name}
            <span></span>
        </Link>
    </li>
);

let Sort = (props)=>(
    <section className="sort">
        <h3 className="sort-title">分类浏览</h3>
        <ul className="sort-body">
            {
                props.sortItems.map((item,index)=>(
                    <SortItem name={item} key={`${item}+${index}`}/>
                ))
            }
        </ul>
    </section>
);

export default Sort;