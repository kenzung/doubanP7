import React, { Component } from 'react';
import Collection from '../../components/Collection';
import { CellRating, Cell } from '../../components/Collection/Cell';
import { getFiction, getNonFiction } from '../../network/book';
import Sort from '../../components/Sort';
import { bookSort } from '../../data/constData';
import NavigationBar from '../../components/NavigationBar';
import './book.less';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fictionBook: [],
      nonFictionBook: [],
    };
  }

  componentDidMount() {
    this.fetchBooks(getFiction(), 'fictionBook');
    this.fetchBooks(getNonFiction(), 'nonFictionBook');
  }

  fetchBooks(getBook, stateName) {
    getBook.then(res => res.json()).then((json) => {
      this.setState({
        [stateName]: json.books,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  loopAndCreateCellItem(arr) {
    return arr.map((item, index) => {
      const {
        images, rating, title, id,
      } = item;
      return (
        <Cell url={`#${id}`} image={images.small} title={title} key={index}>
          <CellRating score={rating.average} />
        </Cell>
      );
    });
  }

  render() {
    const { nonFictionBook, fictionBook } = this.state;
    return (
      <React.Fragment>
        <NavigationBar />
        <section className="content-body">
          <Collection title="最受关注图书|虚构类">
            {
              this.loopAndCreateCellItem(fictionBook)
            }
          </Collection>
          <Collection title="最受关注图书|非虚构类">
            {
              this.loopAndCreateCellItem(nonFictionBook)
            }
          </Collection>
          <Sort sortItems={bookSort} />
        </section>
      </React.Fragment>
    );
  }
}

export default Book;
