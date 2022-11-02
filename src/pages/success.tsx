import { Icon, Result } from 'antd-mobile';
import React from 'react';
import { connect } from 'dva';
const success = ({ message }) => {
  return (
    <Result
      img={
        <Icon
          type={message.type == 'success' ? 'check-circle' : 'check-circle-o'}
          style={{ width: 60, height: 60, fill: '#1F90E6' }}
        />
      }
      title={message.title}
      message="感谢您的参与！"
    />
  );
};

export default connect(({ common: { message } }) => ({ message }))(success);
