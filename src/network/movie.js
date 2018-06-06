import fetchJsonp from 'fetch-jsonp';
import {api} from '../common/js';
export const inTheatersMovie = fetchJsonp(`${api}/v2/movie/in_theaters?count=8`);
export const commonSoonMovie = fetchJsonp(`${api}/v2/movie/coming_soon?count=8`);