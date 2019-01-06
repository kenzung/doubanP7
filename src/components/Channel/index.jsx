import React from 'react';
import ChannelItem from './ChannelItem';
import './channel.less';

const Channel = ({ channel }) => (
  <section className="channel">
    <h2>所属频道</h2>
    <div className="channel-body">
      {
        channel && channel.map((channel, index) => (
          <ChannelItem title={channel} key={index} />
        ))
      }
    </div>
  </section>
);

export default Channel;
