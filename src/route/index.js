import React from 'react';
import Book from '../pages/book';
import Movie from '../pages/movie';
import Home from '../pages/home';
import MovieDetail from '../pages/movie/MovieDetail';
import NotFound from '../pages/NotFound';
import ActorDetail from '../pages/movie/ActorDetail';
import MoreMovie from '../pages/movie/MoreMovie';
import Search from '../pages/search';
import EventDetail from '../pages/home/children/EventDetail';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

export default () => (
    <Router>
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movie/celebrity/:id" component={ActorDetail}/>
                <Route path="/movie/subject/:id" component={MovieDetail}/>
                <Route path="/movie/:type" component={MoreMovie}/>
                <Route path="/movie" component={Movie} />
                <Route path="/book" component={Book} />
                <Route path="/event/:id" component={EventDetail}/>
                <Route path="/search" component={Search} />
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    </Router>
);