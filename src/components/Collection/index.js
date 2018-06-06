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
            <Cell title="作品名字" score={10}/>
            <Cell title="作品名字" score={9.2}/>
            <Cell title="作品名字" score={8.1}/>
            <Cell title="作品名字" score={7.3}/>
            <Cell title="作品名字" score={5.2}/>
        </ul>
    </section>
);

export default Collection;