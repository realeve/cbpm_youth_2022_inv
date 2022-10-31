import React from 'react';
import { TextareaItem, List, DatePicker, InputItem, Picker } from 'antd-mobile';
import RadioComponent from '@/components/RadioComponent';
import RadioButon from '@/components/RadioButon';
import CheckboxComponent from '@/components/CheckboxComponent';
import NestRadio from '@/components/NestRadio';
import Select from '@/components/SelectComponent';
import * as R from 'ramda';
import dayjs from 'dayjs';

export interface IPaper {
  title: string;
  data: string | string[];
  subTitle?: string | string[] | null;
  type?: string;
  cascade?: number;
  answer?: number;
  showMore?: boolean;
  [key: string]: any;
}
export interface IPropsForm {
  data?: any;
  onChange: any;
  state: any;
  showErr?: any;
  showKey?: boolean;
  [key: string]: any;
}
export default function FormComponent({
  data,
  onChange,
  showKey = true,
  state,
  showErr,
}: IPropsForm) {
  return data.map(
    (
      { title, data, type = 'radio', subTitle, placeholder, valueType, ...props }: IPaper,
      key: number,
    ) => {
      let idxTitle = showKey ? `${key + 1}.${title}` : title;

      let prop = {
        onChange,
        title: idxTitle,
        idx: key,
        key,
        state,
        data: typeof data === 'string' ? [data] : data,
        length: props.length,
        sort: props.sort,
        maxLength: props.maxLength,
        showErr: !R.equals(showErr, {}),
        placeholder,
        type: valueType,
        subTitle,
        showMore: props?.showMore,
      };

      switch (type) {
        case 'radio':
          return <RadioComponent {...prop} />;
        case 'radiobtn':
          return <RadioButon {...prop} />;
        case 'select':
          return <Select {...prop} />;
        case 'checkbox':
          prop.title += props.length
            ? ''
            : props.maxLength
            ? `(可多选${props.maxLength}项)`
            : '(可多选)';
          return <CheckboxComponent {...prop} />;
        case 'group':
          if (typeof subTitle !== 'undefined' && typeof subTitle !== 'string') {
            return <NestRadio subTitle={subTitle} {...prop} />;
          }
          return null;
        case 'input':
          let { showErr, onChange, idx, ...rest } = prop;
          // console.log(rest);
          return (
            <List renderHeader={prop.title} {...rest}>
              <InputItem
                {...rest}
                value={typeof state[key] === 'undefined' ? undefined : '' + state[key]}
                clear
                onChange={val => {
                  let nextState: string[] = R.clone(state);
                  nextState[idx] = val;
                  onChange(nextState);
                }}
              />
            </List>
          );

        case 'textarea':
          let cascade = typeof props.cascade === 'number';
          let needRemark = cascade && Number(state[key - 1]) === props.cascade;
          return (
            <List renderHeader={prop.title} key={key}>
              <TextareaItem
                disabled={cascade && !needRemark}
                value={
                  cascade && !needRemark
                    ? '无'
                    : typeof state[key] === 'undefined'
                    ? ''
                    : String(state[key])
                }
                onChange={val => {
                  let nextState: (string | string[])[] = R.clone(state);
                  let res: string =
                    (props.cascade && state[key - 1] == '1') || typeof val === 'undefined'
                      ? '无'
                      : val;
                  nextState[key] = res.trim();
                  prop.onChange(nextState);
                }}
                rows={3}
                placeholder="请在此输入"
                clear={true}
              />
            </List>
          );
        case 'DatePicker':
          return (
            <DatePicker
              minDate={new Date('2019-08-05')}
              maxDate={new Date()}
              mode="date"
              title={idxTitle}
              value={new Date(state[key])}
              key={key}
              onChange={(e: Date) => {
                console.log(e);
                let nextState: (string | string[])[] = R.clone(state);
                nextState[key] = dayjs(e).format('YYYY-MM-DD');
                onChange(nextState);
              }}
            >
              <List.Item arrow="horizontal">日期</List.Item>
            </DatePicker>
          );
        default:
          return prop.title;
      }
    },
  );
}
