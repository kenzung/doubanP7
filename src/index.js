import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import NavigationBar from './components/NavigationBar';
import Book from './pages/book';
import Movie from './pages/movie';
import Home from './pages/home';
import MovieDetail from './pages/movie/MovieDetail';
import NotFound from './pages/NotFound';
import './common/style/common.css';

let KZRoute = () => (
    <Router>
        <React.Fragment>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/movie/:id" component={MovieDetail}/>
                <Route path="/movie" component={Movie} />
                <Route path="/book" component={Book} />
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>
    </Router>
);

ReactDOM.render(<KZRoute />, document.getElementById('root'));
registerServiceWorker();
