import { observable } from 'mobx';

export default class MovieStore {
  @observable theatersMovies = [];

  @observable commingMovies = [];

  @observable topMovies = [];

  fetchMovie = (getMovie, name) => {
    getMovie()
      .then(res => res.json())
      .then((json) => {
        this[name] = json.subjects;
      }).catch((error) => {
        console.log(error);
      });
  }
}
