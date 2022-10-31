import React, { useEffect, useState } from 'react';
import styles from './main.less';
import { connect } from 'dva';
import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
import router from 'umi/router';
import FormComponent from '@/components/FormComponent';
import { formData } from './formData';

const Index = () => {
  const [state, setState] = useState([]);
  const [mState, setMState] = useState([]);
  const submit = () => {
    console.log(state, mState);
  };
  return (
    <WingBlank className={styles.main}>
      <FormComponent
        data={formData}
        state={state}
        moreState={mState}
        onMoreChange={e => {
          setMState(e);
        }}
        onChange={e => {
          setState(e);
        }}
      />
      <WhiteSpace />
      <Button type="primary" onClick={submit}>
        提交
      </Button>
    </WingBlank>
  );
};

export default connect()(Index);
