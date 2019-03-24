import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getExactEvent } from '../../../../network/article';
import './eventDetail.less';

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.eventId = this.props.match.params.id;
    this.state = {
      event: null,
    };
  }

  componentDidMount() {
    getExactEvent(this.eventId)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          event: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const backgroundStyle = {};
    const { event } = this.state;
    if (event) {
      backgroundStyle.backgroundImage = `url(${event.image})`;
    }
    return (
      <section className="event">
        <section className="event-title">
          <section className="event-title__poster">
            <div style={backgroundStyle} />
            <img src={event && event.image} alt={event && event.alt} />
          </section>
          <section className="event-title__info">
            <span />
          </section>
        </section>
        <h2>活动详情</h2>
        <section className="event-body">
          {ReactHtmlParser(event && event.content)}
        </section>
      </section>
    );
  }
}
