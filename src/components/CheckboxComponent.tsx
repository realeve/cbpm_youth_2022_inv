import React from 'react';
import { IQuestion } from './RadioButon';
import { List, Checkbox, InputItem } from 'antd-mobile';
import * as lib from '@/utils/lib';
import * as R from 'ramda';
const CheckboxItem = Checkbox.CheckboxItem;

const CheckboxComponent = function({
  idx: key,
  title,
  data,
  onChange,
  state,
  sort,
  length,
  maxLength,
  showErr,
  ...props
}: IQuestion) {
  const onMultipleChange = (value: string | number, key: number) => {
    let nextState = lib.handleMultipleChange(state, value, key, sort, length, maxLength);
    onChange(nextState);
  };

  const answerStr = lib.parseAnswer(state, key, title, showErr);

  return (
    <List renderHeader={answerStr} {...props}>
      {data.map((name: string, value: number) => (
        <CheckboxItem
          key={value}
          checked={state[key] && state[key].includes(String(value))}
          onChange={() => onMultipleChange(value, key)}
        >
          {lib.alphaRange[value]}、{name}
        </CheckboxItem>
      ))}
      {props.showmore && state[key]?.includes(String(data.length - 1)) && (
        <InputItem
          value={typeof state[key] === 'undefined' ? undefined : '' + state[key]}
          clear
          onChange={val => {
            console.log(val);
          }}
        />
      )}
    </List>
  );
};

export default CheckboxComponent;
