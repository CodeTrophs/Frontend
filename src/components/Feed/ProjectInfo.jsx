import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/projectInfo.module.scss';

const ProjectInfo = ({ page, data, url }) => {
  // const [Dropdown, setDropdown] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdown(!Dropdown);
  // };

  return (
    <div className={styles.container}>
      {/* <div className={styles['top-row']}>
        <div className={styles['search-bar']}>
          <div className={styles.filter}>
            <div
              tabIndex={0}
              className={styles['filter-label']}
              role="button"
              onKeyDown={toggleDropdown}
              onClick={toggleDropdown}>
              Filter <img src="/SVG/dropdown-icon.svg" alt=">" />
            </div>
            {Dropdown && (
              <div className={styles.dropdown}>
                <div>Open issues and pull requests</div>
                <div>Your issues</div>
                <div>Your pull requests</div>
                <div>Everything assigned to you</div>
              </div>
            )}
          </div>
          <input
            type="search"
            name="filter"
            className={styles.filter}
            placeholder="search"
          />
        </div>
        <div className={styles['label-container']}>
          <div className={styles.labels}>
            <div>
              <img src="/SVG/label.svg" alt="label" />
              Labels
            </div>
            <div className={styles['labels-number']}>23</div>
          </div>
          <div className={styles.milestones}>
            <div>
              <img src="/SVG/milestone.svg" alt="mile" />
              Milestone
            </div>
            <div className={styles['labels-number']}>23</div>
          </div>
        </div>
      </div> */}
      {page === 'issues' && (
        <div className={styles.data}>
          {data != null &&
            data.issues &&
            data.issues.map((issue) => {
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
          {data != null && data.issues.length === 0 && (
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
      )}
      {page === 'pull-requests' && (
        <div>
          {' '}
          <div className={styles.data}>
            {data &&
              data.pulls &&
              data.pulls.map((pull) => {
                return (
                  <div className={styles['data-item']} key={pull.node_id}>
                    <a
                      href={pull.html_url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <div className={styles['data-left-col']}>
                        <h3 className={styles['issue-name']}>{pull.title}</h3>
                        <p>
                          #{pull.number} Opened on{' '}
                          {pull.created_at.slice(0, 10)} by {pull.user.login}
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
          </div>
          {data != null && data.pulls.length === 0 && (
            <div className={styles['not-found']}> No Pulls Found ! </div>
          )}
          <div className={styles['all-button']}>
            <a href={`${url}/pulls`} target="_blank" rel="noopener noreferrer">
              <button type="button" disabled={url == null}>
                All Pulls
              </button>
            </a>
          </div>
        </div>
      )}
      {page === 'contribution' && <div>Contributors</div>}
    </div>
  );
};

ProjectInfo.defaultProps = {
  data: {},
  url: null
};

ProjectInfo.propTypes = {
  page: PropTypes.string.isRequired,
  url: PropTypes.string,
  data: PropTypes.exact({
    issues: PropTypes.array,
    pulls: PropTypes.array
  })
};

export default ProjectInfo;
