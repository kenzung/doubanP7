import React from 'react';
import './collection.less';

let Collection = (props) => (
    <section className="collection-section">
        <div className="collection-section__title">
            <h3>{props.title}</h3>
            <a>更多</a>
        </div>
        <ul>
            {props.children}
        </ul>
    </section>
);

export default Collection;