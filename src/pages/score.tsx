import { getCbpm2022Youth } from '@/utils/db';
import React, { useEffect, useState } from 'react';
import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
import styles from './score.less';
export default () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getCbpm2022Youth().then(setState);
  }, []);

  return (
    <WingBlank className={styles.score}>
      <h3>1.各企业参与人数统计</h3>
      <ul>
        <li>
          <span>企业</span>
          <span>人数</span>
        </li>
        {state.map(item => (
          <li key={item.company}>
            <span>{item.company}</span>
            <span>{item.users}</span>
          </li>
        ))}
      </ul>
    </WingBlank>
  );
};
