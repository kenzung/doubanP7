import React,{Component} from 'react';
import ArticleListItem from './ArticleListItem';
import {getArticles} from '../../../../network/article';
import './articleList.less';

class ArticleList extends Component{
    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
        this.skip = 5;
        this.page = 0;
    }
    
    componentDidMount(){
        getArticles(this.page, this.skip)
        .then((res)=>(res.json()))
        .then((json)=>{
            console.log(json);
            this.setState((prevState,props)=>{
                let newArticles = [...(prevState.articles),...json.events];
                return {
                    articles : newArticles
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
                {
                    this.state.articles.map((activity, index)=>(
                        <ArticleListItem activity={activity} key={`${index}-${activity.id}`}/>
                    ))
                }
            </ul>
        );
    }
}

export default ArticleList;