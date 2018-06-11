import React, { Component } from 'react';
import Collection from '../../components/Collection';
import {CellRating,Cell} from '../../components/Collection/Cell';
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
            <section className="book-content">
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
        );
    }
}

export default Book;