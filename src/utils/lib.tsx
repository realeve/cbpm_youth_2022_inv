import React from 'react';
import * as R from 'ramda';
import dayjs from 'dayjs';

// A-Z
export const alphaRange: string[] = R.map(
  (item: number) => String.fromCharCode(item).trim(),
  R.range(65, 65 + 26),
);

// 多选答案处理
export const handleMultipleChange = (
  prevState: string[] | string[][],
  value: string | number,
  key: number,
  sort: boolean = true,
  length: undefined | number,
  maxLength: undefined | number,
) => {
  let state = R.clone(prevState);
  let res: string | string[] = R.isNil(state[key]) ? [] : state[key];
  value = String(value);
  // if (typeof sort === 'undefined') {
  //   sort = true;
  // }

  if (typeof res !== 'string') {
    if (res.includes(value)) {
      // 已选，去除
      res = R.reject(R.equals(value))(res);
    } else {
      // 未选，添加
      res.push(value);
    }
    if (typeof maxLength !== 'undefined') {
      res = R.slice(0, maxLength)(res);
    }

    if (typeof length !== 'undefined') {
      res = R.slice(0, length)(res);
    }

    if (sort) {
      res = res.sort((a, b) => Number(a) - Number(b));
    }
    state[key] = res;
  } else {
    state[key] = value;
  }
  return state;
};
export const now = () => dayjs().format('YYYY-MM-DD HH:mm:ss');
export const ymd = () => dayjs().format('YYYYMMDD');
export const ymdate = () => dayjs().format('YYYY年MM月DD日');

export const ymdatetime = () => dayjs().format('MM月DD日 HH时mm分');

interface Store {
  payload: any;
}
export const setStore = (state: any, store: Store) => {
  let { payload } = store;
  if (typeof payload === 'undefined') {
    payload = store;
    // throw new Error('需要更新的数据请设置在payload中');
  }
  let nextState = R.clone(state);
  Object.keys(payload).forEach(key => {
    let val = payload[key];
    if (R.type(val) === 'Object') {
      nextState[key] = Object.assign({}, nextState[key], val);
    } else {
      nextState[key] = val;
    }
  });
  return nextState;
};

// 答案转换 '0' => 'A'，[0,1]=>'A,B'
export const parseAnswer = (
  state: (string | string[])[],
  key: number,
  title: string,
  showErr: boolean = false,
) => {
  let curAnswer = '';
  let res = state[key];
  if (res) {
    if (typeof res !== 'string') {
      curAnswer = res.map((id: string) => alphaRange[Number(id)]).join(',');
    } else {
      curAnswer = alphaRange[Number(res)];
    }
  }
  return (
    <div style={showErr && curAnswer === '' ? { color: '#e23' } : {}}>
      {title}
      {/* <span> ( {curAnswer} ) </span> */}
    </div>
  );
};
