import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from '../../css/projectInfo.module.scss';

const ProjectInfo = ({ page }) => {
  const [Dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!Dropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles['top-row']}>
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
      </div>
      {page === 'issues' && (
        <div className={styles.data}>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
          <div className={styles['data-item']}>
            <div className={styles['data-left-col']}>
              <h3 className={styles['issue-name']}>Issue#1</h3>
              <p>#23 Opened on 10 May by John</p>
            </div>
            <div className={styles['data-right-col']}>
              <p className={styles.tags}>Bug</p>
            </div>
          </div>
        </div>
      )}
      {page === 'pull-requests' && (
        <div>
          {' '}
          <div className={styles.data}>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
            <div className={styles['data-item']}>
              <div className={styles['data-left-col']}>
                <h3 className={styles['issue-name']}>Pull Requests#1</h3>
                <p>#23 Opened on 10 May by John</p>
              </div>
              <div className={styles['data-right-col']}>
                <p className={styles.tags}>Bug</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {page === 'contribution' && <div>Contributors</div>}
    </div>
  );
};

ProjectInfo.propTypes = {
  page: PropTypes.string.isRequired
};

export default ProjectInfo;
