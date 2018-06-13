import React from 'react';
import {Link} from 'react-router-dom';
import DownloadBar from '../../../components/DownloadBar';
import Summary from '../../../components/Summary';
import Channel from '../../../components/Channel';
import {movieDetail} from '../../../network/movie';
import Mark from '../../../components/Mark';
import './movieDetail.less';

export default class MovieDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie:null
        };
        this.marks = ['想看','看过'];
    }

    getMovieDetail(){
        movieDetail(this.props.match.params.id)
        .then((res)=>(
            res.json()
        ))
        .then((json)=>{
            this.setState({
                movie : json
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount() {
        this.getMovieDetail();
    }

    render(){
        return (
            <section className="content-body">
                <DownloadBar/>
                <Summary />
                <Mark marks={this.marks}/>
                <div className="use-app">
                    <Link to="#">在App上保存你的观影足迹</Link>
                </div>
                <Channel channel={this.state.movie && this.state.movie.genres}/>
            </section>
        )
    }
}