import React from 'react';
import HotTab from './children/HotTab';
import ArticleList from './children/Activities';
import './home.less';

import NavigationBar from '../../components/NavigationBar';
let Home = ()=>(
    <React.Fragment>
        <NavigationBar />
        <div className="content-body">
            <HotTab />
            <ArticleList />
        </div>
    </React.Fragment>
)

export default Home;