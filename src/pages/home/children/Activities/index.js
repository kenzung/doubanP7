import React from 'react';
import PropType from 'prop-types';
import ArticleListItem from './ArticleListItem';
import InfiniteScroll from 'react-infinite-scroller';
import Loading from '../../../../components/Loading';
import './articleList.less';

const Activities = ({
    activities,
    hasMore, 
    fetchActivities
}) => (
    <div>abc</div>
    // <ul className="kz-article-list">
    //     <InfiniteScroll
    //         // loadMore={fetchActivities}
    //         hasMore={hasMore}
    //         loader={<Loading key={0}/>}
    //     >
    //         {
    //             activities.map((activity, index) => {
    //                 return <ArticleListItem activity={activity} key={`${index}-${activity.id}`}/>
    //             })
    //         }
    //     </InfiniteScroll>
    // </ul>
);

Activities.PropType = {
    activities: PropType.array,
    hasMore: PropType.boolean,
    fetchActivities: PropType.func,
};

export default Activities;