import React from 'react';
// import { IQuestion } from '../pages/Paper';
import { List } from 'antd-mobile';
import * as lib from '@/utils/lib';
import * as R from 'ramda';
import { Checkbox } from 'antd-mobile';
// const CheckboxItem = Checkbox.CheckboxItem;
// 使用多选框组件的样式处理单选逻辑

const RadioItem = Checkbox.CheckboxItem; // Radio.RadioItem;

interface IQuestion {
  idx: number;
  title: string;
  data: any;
  onChange: (e: any) => void;
  state: (string | string[])[];
  showErr: boolean;
  render?: (e: any) => void;
  [key: string]: any;
};

const RadioComponent = function({
  idx: key,
  title,
  data,
  onChange,
  state,
  showErr,
  render = (e: any) => e,
  ...props
}: IQuestion) {
  const onRadioChange = (value: number | string, key: number) => {
    let nextState = R.clone(state);
    nextState[key] = String(value);
    onChange(nextState);
  };

  const answerStr = lib.parseAnswer(state, key, title, showErr);

  return (
    <List renderHeader={answerStr} {...props}>
      {data.map((name: string, value: number) => (
        <RadioItem
          key={value}
          checked={String(value) === state[key]}
          onChange={() => onRadioChange(value, key)}
        >
          {lib.alphaRange[value]}、{render(name)}
        </RadioItem>
      ))}
    </List>
  );
};
export default RadioComponent;
