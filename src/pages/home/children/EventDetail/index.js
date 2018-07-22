import React from 'react';
import {getExactEvent} from '../../../../network/article';
import ReactHtmlParser from 'react-html-parser';
import './eventDetail.less';

export default class EventDetail extends React.Component{
    constructor(props){
        super(props);
        this.eventId = this.props.match.params.id;
        this.state = {
            event:null
        };
    }

    componentDidMount(){
        getExactEvent(this.eventId)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                event:json
            })
        })
        .catch(err=>{
            console.log(err);
        });
    }

    render(){
        let backgroundStyle = {};
        if(this.state.event){
            backgroundStyle.backgroundImage = `url(${this.state.event.image})`;
        }
        return (
            <section className="event">
                <section className="event-title">
                    <section className="event-title__poster">
                        <div style={backgroundStyle}>
                        </div>
                        <img src={this.state.event && this.state.event.image} alt={this.state.event && this.state.event.alt}/>
                    </section>
                    <section className="event-title__info">
                        <span></span>
                    </section>
                </section>
                <h2>活动详情</h2>
                <section className="event-body">
                    {ReactHtmlParser(this.state.event && this.state.event.content)}
                </section>   
            </section>
        )
    }
}