// import React from 'react';
import React, { useState } from 'react';
// import { IQuestion } from '../pages/Paper';
import { Button, List } from 'antd-mobile';
import * as lib from '@/utils/lib';
import * as R from 'ramda';
import { Checkbox } from 'antd-mobile';
import styles from './radioButon.less';

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
}

const RadioButon = function({
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
    <List renderHeader={title} {...props}>
      <div className={styles.type}>
        {data.map((name: string) => (
          <Button
            key={name}
            type={name == state[key] ? 'primary' : 'ghost'}
            size="small"
            onClick={() => {
              onRadioChange(name, key);
            }}
          >
            {name}
          </Button>
        ))}
      </div>
    </List>
  );
};
export default RadioButon;
