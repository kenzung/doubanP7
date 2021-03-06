import React from 'react';
import { Link } from 'react-router-dom';
import DownloadBar from '../../../components/DownloadBar';
import Summary from '../../../components/Summary';
import Channel from '../../../components/Channel';
import { movieDetail } from '../../../network/movie';
import Mark from '../../../components/Mark';
import Brief from '../../../components/Brief';
import Collection from '../../../components/Collection';
import Commentary from '../../../components/Commentary';
import { Cell, CellText } from '../../../components/Collection/Cell';
import HotFlow from '../../../components/HotFlow';
import { movieHotFlow } from '../../../data/constData';
import Rating from '../../../components/Rating';
import NavigationBar from '../../../components/NavigationBar';
import './movieDetail.less';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.movieId = this.props.match.params.id;
    this.state = {
      movie: null,
    };
    this.marks = ['想看', '看过'];
  }

  getMovieDetail() {
    movieDetail(this.movieId)
      .then(res => (
        res.json()
      ))
      .then((json) => {
        this.setState({
          movie: json,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  // 组装电影简介
  assembleIntroduction(rest) {
    const {
      year, countries, casts, directors,
    } = rest;
    const contriesStr = countries.join(' / ');
    const directorsStr = directors.map(({ name }) => (`${name}(导演)`)).join(' / ');
    const castsStr = casts.map(({ name }) => (name)).join(' / ');
    const intro = `${year} / ${directorsStr}/ ${castsStr} /${contriesStr}`;
    return intro;
  }

  componentDidMount() {
    this.getMovieDetail();
  }

  render() {
    const movie = this.state.movie;
    if (!movie || Object.keys(movie).length === 0) {
      return <section className="content-body" />;
    }
    const commentArr = [];
    for (let i = 0; i < 4; i += 1) {
      commentArr.push(<Commentary key={i} />);
    }
    return (
      <React.Fragment>
        <NavigationBar />
        <section className="content-body">
          <DownloadBar />
          <Summary
            title={movie.title}
            img={movie.images && movie.images.medium}
            intro={this.assembleIntroduction(movie)}
          >
            {/* 复用summary，subtitle可以自定义 */}
            <div className="summary-subtitle">
              <Rating score={movie.rating && movie.rating.average ? movie.rating.average : 0} />
              <span className="summary-subtitle-commentary">
                {movie.ratings_count}
                人评价
              </span>
            </div>
          </Summary>
          <Mark marks={this.marks} />
          <div className="use-app">
            <Link to="#">在App上保存你的观影足迹</Link>
          </div>
          <Channel channel={movie.genres} />
          <Brief title={movie.title} brief={movie.summary} />
          <Collection title="影人">
            {
              movie.directors.length > 0 && movie.directors.map((director, index) => (
                <Cell url={`/movie/celebrity/${director.id}`} image={director.avatars && director.avatars.medium} title={director.name} key={index}>
                  <CellText text="导演" style={{ fontSize: 12, color: '#000' }} />
                </Cell>
              ))
            }
            {
              movie.casts.length > 0 && movie.casts.map((cast, index) => (
                <Cell url={`/movie/celebrity/${cast.id}`} image={cast.avatars && cast.avatars.medium} title={cast.name} key={index}>
                  <CellText text="演员" style={{ fontSize: 12, color: '#000' }} />
                </Cell>
              ))
            }
          </Collection>
          <section className="comments">
            <h2>
              {movie.title}
的短评(
              {movie.comments_count}
)
            </h2>
            {commentArr}
            <Link to="#" className="comments-more">查看更多评论</Link>
          </section>
          <HotFlow title={`推荐${movie.title}的系列`} hotFLows={movieHotFlow} titleSize="15px" />
        </section>
      </React.Fragment>

    );
  }
}
