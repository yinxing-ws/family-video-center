import React from 'react';
import { useRequest } from 'ahooks';
import { getDate } from './api/date';
import fetchGithubStars from './api/star';
import './index.css';

export default () => {
  const { data: date } = useRequest(() => getDate());
  const { data: repo, loading } = useRequest(() =>
    fetchGithubStars('midwayjs/midway')
  );

  return (
    <div className='app'>
      <img src='/logo.png' className='logo' />
      <h2>Hello Midway Hooks</h2>
      <p style={{ textAlign: 'center' }}>
        Edit <code>src/api/*.ts</code> and watch it change.
        <br />
        You can also open Devtools to see the request details.
      </p>
      <div>
        <p>
          <span className='lambda'>λ GET</span>
          <span className='lambda'>getDate()</span>
          <span>Server Date: {date}</span>
        </p>
        <p>
          <span className='lambda'>λ POST</span>
          <span className='lambda'>fetchStars('midwayjs/midway')</span>
          <span>Github Stars: {loading ? 'Fetching...' : repo.stars}</span>
        </p>
      </div>
    </div>
  );
};
