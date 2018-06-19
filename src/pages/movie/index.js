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
    fetchMovie(getMovie,stateName){
        getMovie.then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                [stateName] : json.subjects
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    loopAndCreateCellItem(arr){
        return arr.map((item,index)=>{
            const {images:{small:image},rating:{average:score},title,id} = item;
            return (
                <Cell url={`movie/${id}`} image={image} title={title} key={index}>
                    <CellRating score={score}/>
                </Cell>
            )
        })
    }

    componentDidMount() {
        this.fetchMovie(inTheatersMovie(),'inTheatersMovies');
        this.fetchMovie(top8(),'topMovies');
        this.fetchMovie(commonSoonMovie(),'newMovies');
    }
    render(){
        return (
            <section className="content-body">
                <Collection title="影院热映" showMore={true}>
                    {
                        this.loopAndCreateCellItem(this.state.inTheatersMovies)
                    }
                </Collection>
                <Collection title="经典电影" showMore={true}>
                    {
                        this.loopAndCreateCellItem(this.state.topMovies)
                    }
                </Collection>
                <Collection title="新片速递" showMore={true}>
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