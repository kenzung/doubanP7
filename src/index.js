import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import NavigationBar from './components/NavigationBar';
import Book from './pages/book';
import Movie from './pages/movie';
import Home from './pages/home';
import './common/style/common.css'

let KZRoute = () => (
    <Router>
        <div>
            <NavigationBar />
            <Route exact path="/" component={Home} />
            <Route path="/movie" component={Movie} />
            <Route path="/book" component={Book} />
        </div>
    </Router>
);

ReactDOM.render(<KZRoute />, document.getElementById('root'));
registerServiceWorker();
