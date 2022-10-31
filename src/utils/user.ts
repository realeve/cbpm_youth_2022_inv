import router from 'umi/router';

// 活动开始前，参与测试人员数据加前缀
export const _dev = false;

const prefix = _dev ? 'wish_dev' : 'wish_dist';
let key: {
  [key: string]: string;
} = {
  user: prefix + 'user',
  login: prefix + 'login',
};

export const saveUserinfo = data => {
  window.localStorage.setItem(key.user, JSON.stringify(data));
};

export const loadUserinfo = () => {
  let user = window.localStorage.getItem(key.user);
  if (user == 'undefined' || !user || typeof user == 'undefined' || user == null) {
    return {};
  }
  return JSON.parse(user);
};

export let gotoSuccess = () => router.push('/result');

export const setLoginData = (v: string[] = []) => {
  window.localStorage.setItem(key.login, JSON.stringify(v));
};

export const getLoginData = () =>
  JSON.parse(window.localStorage.getItem(key.login) || '["信息技术部"]');
