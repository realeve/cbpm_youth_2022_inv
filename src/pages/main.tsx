import React, { useEffect, useState } from 'react';
import styles from './main.less';
import { connect } from 'dva';
import { WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import router from 'umi/router';
import FormComponent from '@/components/FormComponent';
import { formData } from './formData';

const checkPaper = (state: (string | null)[], mState: (string | null)[]) => {
  let valid = true,
    idx = 0;
  while (valid) {
    let item = state[idx],
      formItem = formData[idx];
    // 检查题目完整性
    if (!item) {
      valid = false;
      Toast.fail(`第${idx + 1}道题目未填写`);
    }

    // 当前题目可以自定义填写
    if (valid && formItem?.showmore) {
      // 选中了最后一项
      if (item?.includes(String(formItem.data.length - 1))) {
        // 是否填写内容
        if (!mState[idx]) {
          valid = false;
          Toast.fail(`第${idx + 1}道题目选择了其他，未填写详细信息。`);
        }
      }
    }

    idx++;
  }

  return valid;
};

const Index = () => {
  const [state, setState] = useState(new Array(formData.length));
  const [mState, setMState] = useState(new Array(formData.length));
  const submit = () => {
    // 检查数据
    let valid = checkPaper(state, mState);
    if (!valid) {
      return;
    }
    console.log(state, mState);
  };
  return (
    <WingBlank className={styles.main}>
      <FormComponent
        data={formData}
        state={state}
        moreState={mState}
        onMoreChange={setMState}
        onChange={setState}
      />
      <WhiteSpace />
      <Button type="primary" onClick={submit}>
        提交
      </Button>
    </WingBlank>
  );
};

export default connect()(Index);
