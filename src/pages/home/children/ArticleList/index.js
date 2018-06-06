import React,{Component} from 'react';
import ArticleListItem from './ArticleListItem'
import '../../../../common/style/common.css'
import './articleList.less'

class ArticleList extends Component{
    render(){
        return (
            <ul className="kz-article-list">
                <ArticleListItem/>
                <ArticleListItem/>
                <ArticleListItem/>
                <ArticleListItem/>
                <ArticleListItem/>
                {/* 这里需要使用for循环 */}
            </ul>
        );
    }
}

export default ArticleList;