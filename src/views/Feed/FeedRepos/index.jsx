import { arrayOf, func, bool } from 'prop-types';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../../../components/Feed/FeedCard';
import LinearLoader from '../../../components/LinearLoader';

const FeedRepos = ({
  repoList,
  getNextRepos,
  reachedEnd,
  savedRepos,
  changeSavedList
}) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={repoList.length}
        next={getNextRepos}
        hasMore={!reachedEnd}
        scrollThreshold="95%"
        style={{ paddingTop: '1rem' }}
        loader={<LinearLoader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            {repoList.length > 0 ? (
              <b>Yay! You have seen it all</b>
            ) : (
              <b style={{ color: 'red' }}>No Repositories found!</b>
            )}
          </p>
        }>
        {repoList.map((repo) => {
          return (
            <Card
              key={repo.id}
              repo={repo}
              isSaved={
                savedRepos.find((id) => id === repo.node_id) !== undefined
              }
              changeSaveOption={async (method) => {
                return changeSavedList(repo.node_id, method);
              }}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

FeedRepos.propTypes = {
  repoList: arrayOf({}).isRequired,
  getNextRepos: func.isRequired,
  reachedEnd: bool.isRequired,
  savedRepos: arrayOf({}).isRequired,
  changeSavedList: func.isRequired
};
export default FeedRepos;
