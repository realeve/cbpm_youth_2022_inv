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
