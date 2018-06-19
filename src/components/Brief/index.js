import React from 'react';
import './brief.less';

let Brief = ({title,brief})=>(
    <section className="brief">
        <h2>{`${title}的剧情简介`}</h2>
        <p>{brief}</p>
    </section>
);

export default Brief;