import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.less';
import router from 'umi/router';

function NewPage() {
  return (
    <>
      <WingBlank className={styles.content}>
        <h3>
          2022年度中国印钞造币行业
          <br />
          青年职工调查问卷
        </h3>
        <WhiteSpace size="lg" />
        <p>亲爱的青年：</p>
        <p style={{ textIndent: '2em' }}>
          为进一步做好集团公司青年工作，全面了解青年的思想状况，准确把握青年的思想动向，助力行业高质量发展。集团公司团委特进行本次调查问卷，希望聆听到你的真实声音。
        </p>
        <p className={styles.align_right}>共青团中国印钞造币集团有限公司委员会</p>
        <p className={styles.align_right}>2022年11月2日</p>
        <WhiteSpace size="lg" />
      </WingBlank>
      <WingBlank style={{ marginTop: 150 }}>
        <Button
          type="primary"
          onClick={() => {
            router.push('/main');
          }}
          style={{ backgroundColor: 'green' }}
        >
          开始问卷
        </Button>
      </WingBlank>
    </>
  );
}

export default NewPage;
