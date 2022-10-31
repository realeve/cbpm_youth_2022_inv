import React, { useEffect, useState } from 'react';
import styles from './main.less';
import { connect } from 'dva';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import router from 'umi/router';
import FormComponent from '@/components/FormComponent';
import { formData } from './formData';

const Index = () => {
  const [state, setState] = useState([]);
  useEffect(() => {}, []);
  return (
    <WingBlank className={styles.main}>
      <FormComponent
        data={formData}
        state={state}
        onChange={e => {
          console.log(e);
          setState(e);
        }}
      ></FormComponent>
    </WingBlank>
  );
};

export default connect()(Index);
