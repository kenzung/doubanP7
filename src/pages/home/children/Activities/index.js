import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { fetchActivities } from '../../../../action/activityActionCreator';
import ArticleListItem from './ArticleListItem';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../../../../components/Loading';
import './articleList.less';

const Activities = ({
    activities,
    hasMore, 
    fetchActivities
}) => (
    <ul className="kz-article-list">
        <InfiniteScroll
            loadMore={fetchActivities}
            hasMore={hasMore}
            loader={<Loading key={0}/>}
        >
            {
                activities.map((activity, index) => {
                    return <ArticleListItem activity={activity} key={`${index}-${activity.id}`}/>
                })
            }
        </InfiniteScroll>
    </ul>
);

Activities.PropType = {
    activities: PropType.array,
    hasMore: PropType.boolean,
    fetchActivities: PropType.func,
};

const mapStateToProps = (state) => {
    const { activities, hasMore } = state.activity;
    return {
        activities,
        hasMore,
    };
};

export default connect(mapStateToProps, { fetchActivities })(Activities);