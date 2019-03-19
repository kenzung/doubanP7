import fetchJsonp from 'fetch-jsonp';
import { apiHttp } from '../common/js';

export const movieDetail = id => (
  fetchJsonp(`${apiHttp}/v2/movie/subject/${id}`)
);

export const actorInfo = id => (
  fetchJsonp(`${apiHttp}/v2/movie/celebrity/${id}`)
);

export const inTheatersMovies = (start = 0, count = 8) => fetchJsonp(`${apiHttp}/v2/movie/in_theaters?count=${count}&start=${start}`);

export const comingSoonMovies = (start = 0, count = 8) => fetchJsonp(`${apiHttp}/v2/movie/coming_soon?count=${count}&start=${start}`);

export const topMovies = (start = 0, count = 8) => fetchJsonp(`${apiHttp}/v2/movie/top250?count=${count}&start=${start}`);
