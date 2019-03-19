import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Collection from '../../components/Collection';
import { CellRating, Cell } from '../../components/Collection/Cell';
import Sort from '../../components/Sort';
import HotFlow from '../../components/HotFlow';
import './movie.less';
import { movieSort, movieHotFlow } from '../../data/constData';
import { inTheatersMovies, comingSoonMovies, topMovies } from '../../network/movie';
import NavigationBar from '../../components/NavigationBar';
import { movieStore } from '../../store';

function MovieSlide({
  collectionTitle,
  dataSource,
  url,
}) {
  return (
    <Collection title={collectionTitle} url={url}>
      {
        dataSource.map((item) => {
          const {
            images: { small: image }, rating: { average: score }, title, id,
          } = item;
          return (
            <Cell url={`/movie/subject/${id}`} image={image} title={title} key={id}>
              <CellRating score={score} />
            </Cell>
          );
        })
      }
    </Collection>
  );
}

MovieSlide.propTypes = {
  collectionTitle: PropTypes.string.isRequired,
  url: PropTypes.string,
  dataSource: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

MovieSlide.defaultProps = {
  url: null,
  dataSource: [],
};


@observer
class Movie extends Component {
  componentDidMount() {
    const { fetchMovie } = movieStore;
    fetchMovie(inTheatersMovies, 'theatersMovies');
    fetchMovie(comingSoonMovies, 'commingMovies');
    fetchMovie(topMovies, 'topMovies');
  }

  render() {
    const { theatersMovies, commingMovies, topMovies: tMovies } = movieStore;
    return (
      <React.Fragment>
        <NavigationBar />
        <section className="content-body">
          <MovieSlide
            collectionTitle="影院热映"
            url="/movie/inTheatersMovies"
            dataSource={theatersMovies}
          />
          <MovieSlide
            collectionTitle="经典电影"
            url="/movie/topMovies"
            dataSource={tMovies}
          />
          <MovieSlide
            collectionTitle="新片速递"
            url="/movie/comingSoonMovies"
            dataSource={commingMovies}
          />
          <HotFlow title="发现好电影" hotFLows={movieHotFlow} />
          <Sort sortItems={movieSort} />
        </section>
      </React.Fragment>
    );
  }
}

export default Movie;
