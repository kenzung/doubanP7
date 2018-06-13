import React from 'react';
import {Link} from 'react-router-dom';
import './mark.less';

let Mark = ({marks})=>(
    <section className="mark">
        {
            marks.map((mark,index)=>(
                <Link to="#" className="mark-item" key={index}>{mark}</Link>
            ))
        }
    </section>
);

export default Mark;