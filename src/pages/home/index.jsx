import React, { Fragment } from 'react';
import HotTab from './components/HotTab';
import NavigationBar from '../../components/NavigationBar';
import Events from './components/Events';
import './home.less';

const Home = () => (
  <Fragment>
    <NavigationBar />
    <div className="content-body">
      <HotTab />
      <Events />
    </div>
  </Fragment>
);

export default Home;
