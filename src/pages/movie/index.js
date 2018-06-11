import React,{Component} from 'react';
import Collection from '../../components/Collection';
import {CellRating,Cell} from '../../components/Collection/Cell';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow';
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

    loopAndCreateCellItem(arr){
        return arr.map((item,index)=>{
            const {images,rating,title,id} = item;
            return (
                <Cell url={`#${id}`} image={images.small} title={title} key={index}>
                    <CellRating score={rating.average}/>
                </Cell>
            )
        })
    }

    componentDidMount() {
        this.fetchInTheatersMovies();
        this.fetchNewMovies();
        this.fetchTop8Movie();
    }
    render(){
        return (
            <section className="movie-content">
                <Collection title="影院热映">
                    {
                        this.loopAndCreateCellItem(this.state.inTheatersMovies)
                    }
                </Collection>
                <Collection title="经典电影">
                    {
                        this.loopAndCreateCellItem(this.state.topMovies)
                    }
                </Collection>
                <Collection title="新片速递">
                    {
                        this.loopAndCreateCellItem(this.state.newMovies)
                    }
                </Collection>
                <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
                <Sort sortItems={movieSort}/>
            </section>
        )
    }
}
    

export default Movie;