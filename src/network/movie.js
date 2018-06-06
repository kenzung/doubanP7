import fetchJsonp from 'fetch-jsonp';
import {api} from '../common/js';
export const inTheaters = fetchJsonp(`${api}/v2/movie/in_theaters`);