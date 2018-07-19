import React from 'react';
import {Link} from "react-router-dom";
import './collection.less';

let Collection = (props) => (
    <section className="collection-section">
        <div className="collection-section__title">
            <h3>{props.title}</h3>
            {props.url && <Link to={props.url}>更多</Link>}
        </div>
        <ul>
            {props.children}
        </ul>
    </section>
);

export default Collection;