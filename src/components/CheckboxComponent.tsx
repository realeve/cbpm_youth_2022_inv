import React from 'react';
import { IQuestion } from './RadioButon';
import { List, Checkbox, InputItem } from 'antd-mobile';
import * as lib from '@/utils/lib';
import * as R from 'ramda';
const CheckboxItem = Checkbox.CheckboxItem;

export const MoreState = ({ idx: key, ...props }: IQuestion) => (
  <InputItem
    value={typeof props?.moreState?.[key] === 'undefined' ? undefined : '' + props?.moreState[key]}
    placeholder="请在此输入详情"
    clear
    onChange={(val: string) => {
      let nextState = R.clone(props?.moreState);
      nextState[key] = val;
      props?.onMoreChange(nextState);
    }}
  />
);

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

    // 不选最后一项
    if (!state[key]?.includes(String(data.length - 1))) {
      let nextMoreState = R.clone(props?.moreState);
      nextMoreState[key] = undefined;
      props?.onMoreChange(nextMoreState);
    }
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
        <MoreState idx={key} {...props} />
      )}
    </List>
  );
};

export default CheckboxComponent;
