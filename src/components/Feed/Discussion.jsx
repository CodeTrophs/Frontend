import Router from 'next/router';
import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import styles from '../../scss/discussion.module.scss';
import { getDiscussion, postDiscussion } from '../../services/discussion';
import LinearLoader from '../LinearLoader';
import Dropdown from './Dropdown';
// import { event } from 'react-ga';

const discussion = ({ repoData }) => {
  const [discussions, setdiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discussionForm, setDiscussionForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [postDetail, setPostDetail] = useState({});
  const items = [
    {
      id: 1,
      value: 'Latest'
    },
    {
      id: 2,
      value: 'Most Relevent'
    }
  ];

  async function getDiscussForRepo() {
    try {
      const res = await getDiscussion(repoData.node_id);
      res.data && res.data.data && setdiscussions(res.data.data.reverse());
    } catch (res) {
      toast.error(
        `${res.status && res.status} : ${res.message && res.message}`
      );
    }
    setLoading(false);
  }

  async function postDiscussForRepo() {
    try {
      const res = await postDiscussion(repoData.node_id, question);
      res.data && res.data.data && setPostDetail(res.data);
    } catch (res) {
      toast.error(
        `${res.status && res.status} : ${res.message && res.message}`
      );
    }
    setLoading(false);
  }

  function handleSubmit() {
    postDiscussForRepo();
    setQuestion('');
    setDiscussionForm(false);
  }

  function displayForm() {
    setDiscussionForm(!discussionForm);
  }

  useEffect(() => {
    if (Router.query.pid) {
      getDiscussForRepo();
    }
  }, [postDetail]);
  if (loading) {
    return <LinearLoader />;
  }

  function handleChange(e) {
    setQuestion(e.target.value);
  }

  return (
    <div style={{ height: '100%' }}>
      <div className={styles['grid-container']}>
        <div className={styles.discussion}>
          <div className={styles.discussion_title}>
            <h1>Discussion Forum</h1>
            <p>Get help and discuss with the community</p>
          </div>
        </div>

        <div className={styles.description}>
          <div className={styles.box}>
            <h2>Description</h2>
            <p>
              Welcome to the discussion forums! Ask questions, debate ideas, and
              find mates who share your goal.
            </p>
          </div>
        </div>
        <div className={styles.forumguide}>
          <h2>Forum Guidelines</h2>
        </div>
        <div className={styles.adsection}>
          <div className={styles.box}>
            <h1>AD SECTION</h1>
          </div>
        </div>
        <div className={styles.sortby}>
          <div className={styles.sort_title}>
            <div className={styles.sort}>
              <p>
                <strong>Sort by: </strong>{' '}
              </p>
              <Dropdown items={items} multiSelect={false} />
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={displayForm}>
              New Thread
            </button>
          </div>
        </div>

        <div
          className={styles.bottom}
          style={{ display: discussionForm ? 'flex' : 'none' }}>
          <textarea
            name="discussion"
            id="discussion"
            value={question}
            onChange={handleChange}
            rows="3"
          />
          <img src="/SVG/attachment.svg" alt="Attach" />
          <button type="submit" onClick={handleSubmit} disabled={!question}>
            <img src="/SVG/send.svg" alt="Send" />
          </button>
        </div>

        <div className={styles.data}>
          {discussions != null &&
            discussions &&
            discussions.map((discuss, i) => {
              if (discuss.question) {
                return (
                  <div className={styles['data-item']} key={discuss._id}>
                    <div className={styles['data-left-col']}>
                      <div className={styles.name}>
                        <p>{discuss.userId.name[0]}</p>
                      </div>
                      <div className={styles['discussion-info']}>
                        <h3>Thread #{i + 1}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'blue' }}>
                          {discuss.userId.name}
                        </p>
                        <p>{discuss.question}</p>
                        <div
                          style={{
                            display: 'flex',
                            marginTop: '1rem',
                            fontSize: '0.7rem'
                          }}>
                          <img
                            src="https://img.icons8.com/fluent-systems-filled/24/000000/reply-arrow.png"
                            width="20px"
                            height="20px"
                            alt="fluent system"
                          />
                          <p>Reply</p>
                          <p style={{ marginLeft: '1rem' }}>
                            Follow this discussion
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          {discussions != null && discussions.length === 0 && (
            <div className={styles['not-found']}> No Discussion Found ! </div>
          )}
        </div>
        {/* <div className={styles.popupwrapper} style={{display: discussionForm ? "block":"none"}} >
          <div className={styles.container} >
            <div className={styles.top}>
            <button type="button" className={styles.popup_close} onClick={displayForm}>x</button>
              <h2>Discussion</h2>
              
            </div>
            <div className={styles.middle}>No discussions yet</div>
            <div className={styles.bottom}>
              <textarea name="discussion" id="discussion"  value ={question} onChange={handleChange} />
              <img src="/SVG/attachment.svg" alt="attachment" />
              <button type="submit" onClick={handleSubmit}><img src="/SVG/send.svg" alt=">" /></button>
          </div>
          </div>
          </div> */}
      </div>
    </div>
  );
};

export default discussion;
