import React,{Component} from 'react';
import Collection from '../../components/Collection';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow'
import './movie.less';
import {movieSort,movieHotFlow} from '../../data/constData';
import {inTheatersMovie,commonSoonMovie,top8} from '../../network/movie';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            inTheatersMovies : [],
            newMovies : [],
            topMovies : []
        }
    }
    fetchInTheatersMovies(){
        inTheatersMovie
        .then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                inTheatersMovies : json.subjects
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    fetchNewMovies(){
        commonSoonMovie
        .then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                newMovies : json.subjects
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    fetchTop8Movie(){
        top8
        .then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                topMovies : json.subjects
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount() {
        this.fetchInTheatersMovies();
        this.fetchNewMovies();
        this.fetchTop8Movie();
    }
    render(){
        return (
            <section className="movie-content">
                <Collection title="影院热映" data={this.state.inTheatersMovies}/>
                <Collection title="经典电影" data={this.state.topMovies}/>
                <Collection title="新片速递" data={this.state.newMovies}/>
                <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
                <Sort sortItems={movieSort}/>
            </section>
        )
    }
}
    

export default Movie;