import React, { Component } from 'react';
import PropType from 'prop-types';
import Collection from '../../components/Collection';
import { CellRating, Cell } from '../../components/Collection/Cell';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow';
import './movie.less';
import '../../components/NavigationBar';
import { movieSort, movieHotFlow } from '../../data/constData';
import { inTheatersMovies, comingSoonMovies, topMovies } from '../../network/movie';
import NavigationBar from '../../components/NavigationBar';

class Movie extends Component{
    loopAndCreateCellItem(arr){
        return arr.map((item,index)=>{
            const {images:{small:image},rating:{average:score},title,id} = item;
            return (
                <Cell url={`/movie/subject/${id}`} image={image} title={title} key={index}>
                    <CellRating score={score}/>
                </Cell>
            )
        })
    }

    componentDidMount() {
        // this.props.fetchMovie(inTheatersMovies(), FETCH_THEATERS_MOVIES);
        // this.props.fetchMovie(topMovies(), FETCH_TOP_MOVIES);
        // this.props.fetchMovie(comingSoonMovies(), FETCH_COMINGSOON_MOVIES);
    }

    render(){
        return (
            <React.Fragment>
                <NavigationBar />
                <section className="content-body">
                    <Collection title="影院热映"  url="/movie/inTheatersMovies">
                        {
                            this.loopAndCreateCellItem(this.props.theatersMovies)
                        }
                    </Collection>
                    <Collection title="经典电影" url="/movie/topMovies">
                        {
                            this.loopAndCreateCellItem(this.props.topMovies)
                        }
                    </Collection>
                    <Collection title="新片速递" url="/movie/comingSoonMovies">
                        {
                            this.loopAndCreateCellItem(this.props.commingMovies)
                        }
                    </Collection>
                    <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
                    <Sort sortItems={movieSort}/>
                </section>
            </React.Fragment>
        )
    }
}

Movie.propTypes = {
    theatersMovies: PropType.array,
    commingMovies: PropType.array,
    topMovies: PropType.array,
    fetchMovie: PropType.func,
};

export default Movie;
