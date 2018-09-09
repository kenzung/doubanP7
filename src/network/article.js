import fetchJsonp from 'fetch-jsonp';
import {apiHttps} from '../common/js';

export const getArticles = (page = 0, skip = 5) =>(
    fetchJsonp(`${apiHttps}/v2/event/list?loc=108288&start=${page * skip}&count=${skip}`)
);

export const getExactEvent = (id) => (
    fetchJsonp(`${apiHttps}/v2/event/${id}`)
);