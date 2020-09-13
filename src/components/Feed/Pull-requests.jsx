import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from '../../scss/projectInfo.module.scss';
import { getPulls } from '../../services/feed';
import LinearLoader from '../LinearLoader';

const PullRequests = ({ url }) => {
  const [pulls, setPulls] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPullsForRepo() {
    try {
      const res = await getPulls(Router.query.pid);
      res.data && res.data.data && setPulls(res.data.data);
    } catch (res) {
      toast.error(
        `${res.status && res.status} : ${res.message && res.message}`
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    if (Router.query.pid) {
      getPullsForRepo();
    }
  }, []);

  if (loading) {
    return <LinearLoader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Pull Requests</h1>
        <h4>Get help and discuss with the community</h4>
      </div>
      <div className={styles.data}>
        {pulls != null &&
          pulls &&
          pulls.map((pull) => {
            return (
              <div className={styles['data-item']} key={pull.node_id}>
                <a
                  href={pull.html_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className={styles['data-left-col']}>
                    <h3 className={styles['issue-name']}>{pull.title}</h3>
                    <p>
                      <span style={{ color: 'olive' }}>#{pull.number}</span>{' '}
                      Opened on {pull.created_at.slice(0, 10)} by
                      <span style={{ color: 'olive' }}> {pull.user.login}</span>
                    </p>
                  </div>
                </a>
                <div className={styles['data-right-col']}>
                  {pull.labels.map((label) => {
                    return (
                      <p
                        key={label.node_id}
                        className={styles.tags}
                        style={{ backgroundColor: `#${label.color}` }}>
                        {label.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        {pulls != null && pulls.length === 0 && (
          <div className={styles['not-found']}> No Pull Requests Found ! </div>
        )}
        <div className={styles['all-button']}>
          <a href={`${url}/pulls`} target="_blank" rel="noopener noreferrer">
            <button type="button" disabled={url == null}>
              All Pulls
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

PullRequests.propTypes = {
  url: PropTypes.string.isRequired
};

export default PullRequests;
