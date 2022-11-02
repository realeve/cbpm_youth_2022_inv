import { axios, IAxiosState, TDbWrite } from '@/utils/axios';
import * as user from './user';
export interface IUserInfo {
  openid: string; // openid
  headimgurl: string; // 头像
  nickname: string; // 微信昵称
  username: string;
  dept_name: string;
  uid: number;
  rec_time: string;
  card_id: string;
}

/**
 *   @database: { 微信开发 }
 *   @desc:     { 2022青年问卷调查 }
 */
export const addCbpm2022Youth: (params: {
  openid: string;
  sex: string;
  headimgurl: string;
  nickname: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  q11: string;
  q12: string;
  q13: string;
  q14: string;
  m14: string;
  q15: string;
  q16: string;
  m16: string;
  q17: string;
  q18: string;
  q19: string;
  q20: string;
  q21: string;
  m21: string;
  q22: string;
  m22: string;
  q23: string;
  m23: string;
  q24: string;
  m24: string;
  q25: string;
  m25: string;
  q26: string;
  q27: string;
  m27: string;
  q28: string;
  m28: string;
  q29: string;
  q30: string;
  m30: string;
  q31: string;
  m31: string;
  q32: string;
  m32: string;
  q33: string;
  q34: string;
  q35: string;
  m35: string;
  q36: string;
  m36: string;
  q37: string;
  q38: string;
  m38: string;
  q39: string;
  q40: string;
  m40: string;
  q41: string;
  q42: string;
  q43: string;
  m43: string;
  q44: string;
}) => Promise<number | undefined> = params =>
  axios<TDbWrite>({
    url: '/440/68cce9137a.json',
    params,
  })
    .then(({ data: [{ id }] }) => id)
    .catch(e => {
      if (e['Error Message'].includes('Duplicate')) {
        return -1;
      }
    });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 各企业参与情况 }
 */
export const getCbpm2022Youth = () =>
  axios({
    url: '/441/521d5bd898.json',
  }).then(res =>
    res.data.map((item, idx) => ({
      ...item,
      company: idx + 1 + '.' + item.company,
    })),
  );

/**
 *   @database: { 微信开发 }
 *   @desc:     { 个人状态查询 }
 */
export const getCbpm2022YouthByOpenid: (openid: string) => Promise<number> = openid =>
  axios({
    url: '/442/d32c26e9c6.json',
    params: {
      openid,
    },
  }).then(res => res.rows);

/**
 *   @database: { 微信开发 }
 *   @desc:     { 数据结果查询 }
 */
export const getCbpm2022YouthResult = () =>
  axios({
    url: '/443/f96bb690d0.json',
  }).then(res => res.data);
