import React,{Component} from 'react';
import ArticleListItem from './ArticleListItem';
import {getArticles} from '../../../../network/article';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../../../../components/Loading';
import './articleList.less';

class ArticleList extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles : [],
            loadMore : true
        }
        this.skip = 5;
        this.loadMore = this.loadMore.bind(this);
    }
    
    loadMore(page){
        getArticles(page * this.skip, this.skip)
        .then((res)=>(res.json()))
        .then((json)=>{
            this.setState((prevState,props)=>{
                let newArticles = [...(prevState.articles),...json.events.map((activity, index)=>(
                    <ArticleListItem activity={activity} key={`${index}-${activity.id}`}/>
                ))];
                return {
                    articles : newArticles,
                    hasMore : newArticles.length <= json.total && json.events.length > 0
                }
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render(){
        return (
            <ul className="kz-article-list">
                <InfiniteScroll
                    loadMore={this.loadMore}
                    hasMore={this.state.loadMore}
                    loader={<Loading key={0}/>}
                >
                    {this.state.articles}
                </InfiniteScroll>
            </ul>
        );
    }
}

export default ArticleList;