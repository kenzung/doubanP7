import * as React from 'react';
import HotTab from './children/HotTab';
import { NavigationBar } from '../../components/NavigationBar';
import ArticleList from './children/Activities';
import './home.less';

const Home = ()=>(
    <React.Fragment>
        <NavigationBar />
        <div className="content-body">
            <HotTab />
            {/* <ArticleList /> */}
        </div>
    </React.Fragment>
)

export default Home;
