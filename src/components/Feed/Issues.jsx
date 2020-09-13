import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import styles from '../../scss/projectInfo.module.scss';
import { getIssues } from '../../services/feed';
import LinearLoader from '../LinearLoader';

const Issues = ({ url }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getIssuesForRepo() {
    try {
      const res = await getIssues(Router.query.pid);
      res.data && res.data.data && setIssues(res.data.data);
    } catch (res) {
      toast.error(
        `${res.status && res.status} : ${res.message && res.message}`
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    if (Router.query.pid) {
      getIssuesForRepo();
    }
  }, []);

  if (loading) {
    return <LinearLoader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Issues</h1>
        <h4>Get help and discuss with the community</h4>
      </div>
      <div className={styles.data}>
        {issues != null &&
          issues &&
          issues.map((issue) => {
            if (!issue.pull_request) {
              return (
                <div className={styles['data-item']} key={issue.node_id}>
                  <a
                    href={issue.html_url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className={styles['data-left-col']}>
                      <h3 className={styles['issue-name']}>{issue.title}</h3>
                      <p>
                        <span style={{ color: 'olive' }}>#{issue.number}</span>{' '}
                        Opened on {issue.created_at.slice(0, 10)} by
                        <span style={{ color: 'olive' }}>
                          {' '}
                          {issue.user.login}
                        </span>
                      </p>
                    </div>
                  </a>
                  <div className={styles['data-right-col']}>
                    {issue.labels.map((label) => {
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
            }
            return null;
          })}
        {issues != null && issues.length === 0 && (
          <div className={styles['not-found']}> No Issues Found ! </div>
        )}
        <div className={styles['all-button']}>
          <a href={`${url}/issues`} target="_blank" rel="noopener noreferrer">
            <button type="button" disabled={url == null}>
              All Issues
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

Issues.propTypes = {
  url: PropTypes.string.isRequired
};

export default Issues;
