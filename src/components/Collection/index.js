import React from 'react';
import Cell from './Cell'
import './collection.less';

let Collection = (props) => (
    <section className="collection-section">
        <div className="collection-section__title">
            <h3>{props.title}</h3>
            <a>更多</a>
        </div>
        <ul>
            {
                props.data.map((item,index)=>(
                    <Cell cellItem={item} key={index}/>
                ))
            }
        </ul>
    </section>
);

export default Collection;