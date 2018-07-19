import React, { Component } from 'react';
import Collection from '../../components/Collection';
import {CellRating,Cell} from '../../components/Collection/Cell';
import {getFiction, getNonFiction} from '../../network/book';
import Sort from '../../components/Sort';
import {bookSort} from '../../data/constData';
import NavigationBar from '../../components/NavigationBar';
import './book.less';

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            fictionBook : [],
            nonFictionBook:[]
        }
    }

    fetchBooks(getBook,stateName){
        getBook.then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                [stateName] : json.books
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        this.fetchBooks(getFiction(),'fictionBook');
        this.fetchBooks(getNonFiction(),'nonFictionBook');
    }

    loopAndCreateCellItem(arr){
        return arr.map((item,index)=>{
            const {images,rating,title,id} = item;
            return (
                <Cell url={`#${id}`} image={images.small} title={title} key={index}>
                    <CellRating score={rating.average}/>
                </Cell>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <section className="content-body">
                    <Collection title="最受关注图书|虚构类">
                        {
                            this.loopAndCreateCellItem(this.state.fictionBook)
                        }
                    </Collection>
                    <Collection title="最受关注图书|非虚构类">
                        {
                            this.loopAndCreateCellItem(this.state.nonFictionBook)
                        }
                    </Collection> 
                    <Sort sortItems={bookSort}/>
                </section>
            </React.Fragment>
        );
    }
}

export default Book;