import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import EventItem from './EventItem';
import Loading from '../../../../components/Loading';
import './events.less';

const Events = ({
  activities,
  hasMore,
  fetchActivities,
}) => (
  <ul className="kz-article-list">
    <InfiniteScroll
      loadMore={fetchActivities}
      hasMore={hasMore}
      loader={<Loading key={0} />}
    >
      {activities.map(activity => (
        <EventItem activity={activity} key={activity.id} />
      ))}
    </InfiniteScroll>
  </ul>
);

Events.propTypes = {
  activities: PropTypes.arrayOf([PropTypes.object]),
  hasMore: PropTypes.bool.isRequired,
  fetchActivities: PropTypes.func.isRequired,
};

Events.defaultProps = {
  activities: [],
};

export default Events;
