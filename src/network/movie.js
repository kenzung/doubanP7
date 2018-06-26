import fetchJsonp from 'fetch-jsonp';
import {apiHttp} from '../common/js';
export const inTheatersMovie = ()=>(fetchJsonp(`${apiHttp}/v2/movie/in_theaters?count=8`));
export const commonSoonMovie = ()=>(fetchJsonp(`${apiHttp}/v2/movie/coming_soon?count=8`));
export const top8 = ()=>(fetchJsonp(`${apiHttp}/v2/movie/top250?count=8`));
export const movieDetail = (id) => (
    fetchJsonp(`${apiHttp}/v2/movie/subject/${id}`)
);
export const actorInfo = (id) => (
    fetchJsonp(`${apiHttp}/v2/movie/celebrity/${id}`)
);