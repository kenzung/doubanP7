import React,{Component} from 'react';
import Collection from '../../components/Collection';
import {CellRating,Cell} from '../../components/Collection/Cell';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow';
import './movie.less';
import '../../components/NavigationBar';
import {movieSort,movieHotFlow} from '../../data/constData';
import {inTheatersMovies,comingSoonMovies,topMovies} from '../../network/movie';
import NavigationBar from '../../components/NavigationBar';

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
                <Cell url={`/movie/subject/${id}`} image={image} title={title} key={index}>
                    <CellRating score={score}/>
                </Cell>
            )
        })
    }

    componentDidMount() {
        this.fetchMovie(inTheatersMovies(),'inTheatersMovies');
        this.fetchMovie(topMovies(),'topMovies');
        this.fetchMovie(comingSoonMovies(),'newMovies');
    }
    render(){
        return (
            <React.Fragment>
                <NavigationBar />
                <section className="content-body">
                    <Collection title="影院热映"  url="/movie/inTheatersMovies">
                        {
                            this.loopAndCreateCellItem(this.state.inTheatersMovies)
                        }
                    </Collection>
                    <Collection title="经典电影" url="/movie/topMovies">
                        {
                            this.loopAndCreateCellItem(this.state.topMovies)
                        }
                    </Collection>
                    <Collection title="新片速递" url="/movie/comingSoonMovies">
                        {
                            this.loopAndCreateCellItem(this.state.newMovies)
                        }
                    </Collection>
                    <HotFlow title="发现好电影" hotFLows={movieHotFlow}/>
                    <Sort sortItems={movieSort}/>
                </section>
            </React.Fragment>
        )
    }
}
    

export default Movie;