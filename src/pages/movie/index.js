import React,{Component} from 'react';
import Collection from '../../components/Collection';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow'
import './movie.less';
import {movieSort,movieHotFlow} from '../../data/constData';
import '../../common/js';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieList = []
        }
    }
    componentDidMount() {
        
    }
    render(){
        <section className="movie-content">
            <Collection title="影院热映"/>
            <Collection title="免费电影"/>
            <Collection title="新片速递"/>
            <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
            <Sort sortItems={movieSort}/>
        </section>
    }
}
    

export default Movie;