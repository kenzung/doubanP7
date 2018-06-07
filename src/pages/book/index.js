import React, { Component } from 'react';
import Collection from '../../components/Collection';
import {getFiction, getNonFiction} from '../../network/book';
import Sort from '../../components/Sort';
import {bookSort} from '../../data/constData';
import './book.less';

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            fictionBook : [],
            nonFictionBook:[]
        }
    }

    getFictionBooks(){
        getFiction
        .then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                fictionBook : json.books
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    getNonFictionBooks(){
        getNonFiction
        .then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                nonFictionBook : json.books
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        this.getFictionBooks();
        this.getNonFictionBooks();
    }

    render() {
        return (
            <section className="book-content">
                <Collection title="最受关注图书|虚构类" data={this.state.fictionBook}/>
                <Collection title="最受关注图书|非虚构类" data={this.state.nonFictionBook}/>
                <Sort sortItems={bookSort}/>
            </section>
        );
    }
}

export default Book;