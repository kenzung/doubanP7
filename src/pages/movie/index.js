import React,{Component} from 'react';
import Collection from '../../components/Collection';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow'
import './movie.less';
import {movieSort,movieHotFlow} from '../../data/constData';
import {inTheatersMovie,commonSoonMovie} from '../../network/movie';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            inTheatersMovies : [],
            newMovies : []
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

    componentDidMount() {
        this.fetchInTheatersMovies();
        this.fetchNewMovies();
    }
    render(){
        return (
            <section className="movie-content">
                <Collection title="影院热映" data={this.state.inTheatersMovies}/>
                {/* <Collection title="免费电影" data={this.state.}/> */}
                <Collection title="新片速递" data={this.state.newMovies}/>
                <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
                <Sort sortItems={movieSort}/>
            </section>
        )
    }
}
    

export default Movie;