import React, { useEffect } from 'react';
import styles from './index.less';
import { loadUserinfo } from '../utils/user';
import { connect } from 'dva';

// import vconsole from 'vconsole';
// const VConsole = new vconsole();
interface IPropsLayout {
  location: { pathname: string };
  [key: string]: any;
}
const BasicLayout: (props: IPropsLayout) => React.ReactElement = (props: IPropsLayout) => {
  useEffect(() => {
    let user = loadUserinfo();
    props.dispatch({
      type: 'common/setStore',
      payload: {
        user,
      },
    });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.container}>{props.children}</div>
    </div>
  );
};
export default connect()(BasicLayout);
