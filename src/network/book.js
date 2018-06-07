import fetchJsonp from 'fetch-jsonp';
import {apiHttps} from '../common/js';

export const getFiction = fetchJsonp(`${apiHttps}/v2/book/search?tag=虚构类&count=8`);
export const getNonFiction = fetchJsonp(`${apiHttps}/v2/book/search?tag=非虚构类&count=8`);