import React, { Fragment } from 'react';
import HotTab from './children/HotTab';
import NavigationBar from '../../components/NavigationBar';
import ArticleList from './children/Activities';
import './home.less';

const Home = () => (
  <Fragment>
    <NavigationBar />
    <div className="content-body">
      <HotTab />
      <ArticleList />
    </div>
  </Fragment>
);

export default Home;
