import React from 'react';
import logo from '../../assets/loading_green.gif';
import './loading.less';
let Loading = (props)=>(
    <div className="loader">
        <img src={logo} alt="loading..." className="loader-image"/>
    </div>
);
export default Loading;
