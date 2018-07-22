import fetchJsonp from 'fetch-jsonp';
import {apiHttps} from '../common/js';

export const getArticles = (start = 0, skip = 5) =>(
    fetchJsonp(`${apiHttps}/v2/event/list?loc=108288&start=${start}&count=${skip}`)
);

export const getExactEvent = (id) => (
    fetchJsonp(`${apiHttps}/v2/event/${id}`)
);