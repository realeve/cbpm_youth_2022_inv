import { setStore } from '@/utils/lib';
import weixin from '@/utils/WeiXin';

const namespace = 'common';

export default {
  namespace,
  state: {
    user: {},
    weixin: {},
    message: {
      type: 'success',
      title: '提交成功'
    }
  },
  reducers: {
    setStore,
  },
  effects: {
    *getWxUser(_, { put, call, select }) {
      // 调整用户信息获取
      let user = yield select(state => state.common.weixin);
      if (user.openid) {
        return;
      }

      user = yield call(weixin.getWxUserInfo);
      // let dbUser = yield call(db.getCbpcWishesUser, user);

      console.log('用户信息载入完毕', user);
      if (!user) {
        return;
      }

      yield put({
        type: 'setStore',
        payload: {
          weixin: user,
        },
      });
    },
  },
  subscriptions: {
    async setup({ dispatch }) {
      await dispatch({ type: 'getWxUser' });
      await weixin.init();
    },
  },
};
