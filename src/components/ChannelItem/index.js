import React from 'react';
import {Link} from 'react-router-dom';
import './channelItem.less';

let ChannelItem = (props)=>(
    <li className="channel-item">
        <Link to="#" className="channel-item-inner">
            {props.title}
            <span></span>
        </Link>
    </li>
);

export default ChannelItem;