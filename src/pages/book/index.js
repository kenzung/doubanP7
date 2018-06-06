import React, { Component } from 'react';
import Collection from '../../components/Collection';
import './book.less';

class Book extends Component {
    render() {
        return (
            <section className="book-content">
                <Collection title="最受关注图书|虚构类" />
                <Collection title="最受关注图书|非虚构类" />
            </section>
        );
    }
}

export default Book;