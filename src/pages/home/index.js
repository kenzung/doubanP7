import React from 'react';
import HotTab from './children/HotTab';
import ArticleList from './children/ArticleList';
import './home.less';
let Home = ()=>(
    <div className="content-body">
        <HotTab />
        <ArticleList />
    </div>
)

export default Home;