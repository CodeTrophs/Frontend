import Router from 'next/router';
import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react'

import { getIssues } from '../../firestore/projectData';
import styles from '../../scss/projectInfo.module.scss';
import LinearLoader from '../LinearLoader';


const Issues = ({url}) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getIssuesForRepo() {
    getIssues(Router.query.pid).then((res) => {
      setIssues(res);
      setLoading(false);
    });
  }

  useEffect(() => {
    if (Router.query.pid) {
      getIssuesForRepo();
    }
  }, [])

  if (loading) {
    return <LinearLoader />
  }

  return (
    <div className={styles.container}>
      <h1>
        Issues
      </h1>
      <h4>
        Get help and discuss with the community
      </h4>
      <div className={styles.data}>
        {issues != null &&
        issues &&
        issues.map((issue) => {
          return (
            <div className={styles['data-item']} key={issue.node_id}>
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles['data-left-col']}>
                  <h3 className={styles['issue-name']}>{issue.title}</h3>
                  <p>
                    #{issue.number} Opened on{' '}
                    {issue.created_at.slice(0, 10)} by {issue.user.login}
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
  )
}

Issues.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Issues;
