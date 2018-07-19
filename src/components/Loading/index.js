import React from 'react';
import logo from '../../assets/loading_green.gif';

let Loading = (props)=>(
    <div className="loader">
        <img src={logo} alt="loading..."/>
    </div>
);
export default Loading;
