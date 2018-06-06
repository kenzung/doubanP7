import React from 'react';
import HotTab from './children/HotTab';
import ArticleList from './children/ArticleList';
import './home.less';
let Home = ()=>(
    <div className="kz-home">
        <HotTab />
        <ArticleList />
    </div>
)

export default Home;