import React, { useEffect, useState } from 'react';
import styles from './main.less';
import { connect } from 'dva';
import { WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import router from 'umi/router';
import FormComponent from '@/components/FormComponent';
import { formData } from './formData';
import * as db from '@/utils/db';
const checkPaper = (state: (string | null)[], mState: (string | null)[]) => {
  let valid = true,
    idx = 0;
  let answer = {};
  while (valid && idx < state.length) {
    let item = state[idx],
      formItem = formData[idx];
    // 检查题目完整性
    if (!item) {
      valid = false;
      Toast.fail(`第${idx + 1}道题目未填写`);
      console.log(answer);
    } else {
      answer[`q${idx + 1}`] = Array.isArray(item) ? item.join(',') : item;
    }

    // 当前题目可以自定义填写
    if (valid && formItem?.showmore) {
      // 选中了最后一项

      answer[`m${idx + 1}`] = '';
      if (item?.includes(String(formItem.data.length - 1))) {
        // 是否填写内容
        if (!mState[idx]) {
          valid = false;
          Toast.fail(`第${idx + 1}道题目选择了其他，未填写详细信息。`);
        }
        answer[`m${idx + 1}`] = mState[idx];
      }
    }

    idx++;
  }
  return valid ? answer : false;
};

const Index = ({ weixin, dispatch }) => {
  const [state, setState] = useState(new Array(formData.length));
  const [mState, setMState] = useState(new Array(formData.length));

  useEffect(() => {
    if (!weixin.openid) {
      return;
    }
    db.getCbpm2022YouthByOpenid(weixin.openid).then(success => {
      // if (success) {
      //   Toast.success('您已参与该问卷');
      //   router.push('/score');
      // }
      if (success) {
        dispatch({
          type: 'common/setStore',
          payload: {
            message: {
              type: 'success',
              title: `您已参与该问卷`,
            },
          },
        });
        router.push('/success');
      }
    });
  }, [weixin.openid]);
  const submit = async () => {
    // 检查数据
    let params = checkPaper(state, mState);
    if (!params) {
      return;
    }
    let param = {
      openid: weixin.openid,
      sex: weixin.sex,
      nickname: weixin.nickname,
      headimgurl: weixin.headimgurl,
      ...params,
    };
    // console.log(param);
    let success = await db.addCbpm2022Youth(param);
    if (success == -1) {
      dispatch({
        type: 'common/setStore',
        payload: {
          message: {
            type: 'success',
            title: `您已参与本次活动`,
          },
        },
      });
    } else {
      dispatch({
        type: 'common/setStore',
        payload: {
          message: {
            type: success ? 'success' : 'fail',
            title: `提交${success ? '成功' : '失败'}`,
          },
        },
      });
    }
    router.push('/success');
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

export default connect(({ common: { weixin } }) => ({ weixin }))(Index);
