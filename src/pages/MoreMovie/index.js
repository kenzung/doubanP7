import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Cell,CellRating} from '../../../components/Collection/Cell';
import NavigationBar from '../../../components/NavigationBar';
import PropTypes from 'prop-types';
import {inTheatersMovies,comingSoonMovies,topMovies} from '../../../network/movie';
import Loading from '../../../components/Loading';
import './moreMovie.less';

let MoreMovieCell = ({score, url, title, image})=>(
    <div className="more-movie-cell">
        <Cell url={url} title={title} image={image}>
            <CellRating score={score}/>
        </Cell>
    </div>
);

MoreMovieCell.prototype = {
    url: PropTypes.string,//跳转url
    score: PropTypes.number,//分数
    title: PropTypes.string,//电影名称
    image: PropTypes.string//电影封面
};

export default class MoreMovie extends React.Component{
    constructor(props){
        super(props);
        //方法由路由传入
        let type = this.props.match.params.type;
        switch(type){
            case 'inTheatersMovies':
            this.loadMovieFunc = inTheatersMovies;
            break;
            case 'comingSoonMovies':
            this.loadMovieFunc = comingSoonMovies;
            break;
            case 'topMovies':
            default:
            this.loadMovieFunc = topMovies;
        }
        this.loadMore = this.loadMore.bind(this);
        this.pageStart = 0;
        //定义每次取的个数
        this.perNum = 20;
        this.state = {
            movies:[],
            hasMore : true
        }
    }

    loadMore(page){
        this.loadMovieFunc(page * this.perNum,this.perNum).then(res=>res.json())
        .then((json)=>{
            this.setState((prevState, props) => (
                {
                    movies: prevState.movies.concat(
                        json.subjects.map(item=>(
                            <MoreMovieCell score={item.rating.average} url={`/movie/subject/${item.id}`} title={item.title} image={item.images.small}/>
                        ))
                    ),
                    hasMore: prevState.movies.length < json.total && json.subjects.length > 0
                }
            ));
        }).catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return (
            <React.Fragment>
                <NavigationBar />
                <div className="content-body">
                    <InfiniteScroll
                        pageStart = {this.pageStart}
                        loadMore = {this.loadMore}
                        hasMore = {this.state.hasMore}
                        loader={<Loading key={0}/>}
                    >
                        {this.state.movies}
                    </InfiniteScroll>
                </div>
            </React.Fragment>
        );
    }
}


MoreMovie.propTypes = {
    perNum:PropTypes.number
}