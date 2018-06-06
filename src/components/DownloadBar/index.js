import React from 'react';
import {Link} from 'react-router-dom';
import './downloadBar.less';

export default ()=>(
    <section className="download-section">
        <p>打开App，浏览更多</p>
        <div className="download-section-buttons">
            <Link to="#" className="btn download">极速下载</Link>
            <Link to="#" className="btn open">打开</Link>
        </div>
    </section>
);