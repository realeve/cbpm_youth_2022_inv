import { getCbpm2022Youth, getCbpm2022YouthResult, getCbpm2022YouthDetail } from '@/utils/db';
import React, { useEffect, useState } from 'react';
import { List, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import styles from './score.less';
import Chart from '@/components/Charts';

let COMPANY_LIST = {
  集团公司: '中国印钞造币集团有限公司本部',
  成钞: '成都印钞有限公司',
  北钞: '北京印钞有限公司',
  上钞: '上海印钞有限公司',
  西钞: '西安印钞有限公司',
  石钞: '石家庄印钞有限公司',
  南钞: '南昌印钞有限公司',
  广钞: '广州印钞有限公司',
  南币: '南京造币有限公司',
  上币: '上海造币有限公司',
  沈币: '沈阳造币有限公司',
  保钞: '保定钞票纸业有限公司',
  昆钞: '昆山钞票纸业有限公司',
  中钞研究院: '中钞印制技术研究院有限公司',
  中钞防伪: '中钞特种防伪科技有限公司',
  中钞油墨: '中钞油墨有限公司',
  中钞制版: '北京中钞钞券设计制版有限公司',
  中钞实业: '中钞实业有限公司',
  中钞光华: '中钞光华印制有限公司',
  中钞华森: '中钞华森实业有限公司',
  中钞信用卡: '中钞信用卡产业发展有限公司',
  中钞长城: '中钞长城金融设备控股有限公司',
  中钞国鼎: '中钞国鼎投资有限公司',
  中钞晟昌: '中钞晟昌（北京）运营管理有限公司',
};

export default () => {
  const [state, setState] = useState([]);
  const [companyName, setCompanyName] = useState(undefined);
  const [paper, setPaper] = useState([]);
  useEffect(() => {
    getCbpm2022Youth().then(setState);
    let company = window.location.search.split('?c=')[1];
    if (!company) {
      getAllCompany();
    } else {
      getCompanyDetail(COMPANY_LIST[decodeURI(company)]);
    }
    setCompanyName(decodeURI(company));
    console.log(company);
  }, []);

  const getAllCompany = () => {
    getCbpm2022YouthResult().then(setPaper);
  };

  const getCompanyDetail = q1 => {
    getCbpm2022YouthDetail(q1).then(setPaper);
  };

  return (
    <WingBlank className={styles.score}>
      {/* <h3>1.各企业参与人数统计</h3>
      <ul>
        <li>
          <span>企业</span>
          <span>人数</span>
        </li>
        {state.map(item => (
          <li key={item.name}>
            <span>{item.name}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul> */}
      <List renderHeader={<h3>1.各企业参与人数</h3>}>
        <Chart data={state.reverse()} style={{ height: 700 }} type="bar" title="" />
      </List>

      {companyName && <h3>以下展示 {COMPANY_LIST[companyName]} 数据详情</h3>}
      {/* <List renderHeader={<h3>按企业查看</h3>}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Button
            style={{ width: 'calc(33% - 10px)', margin: '0 5px 5px 0' }}
            onClick={getCompanyDetail}
          >
            所有企业
          </Button>
          {Object.keys(COMPANY_LIST).map(item => (
            <Button
              onClick={() => {
                getCbpm2022YouthDetail(COMPANY_LIST[item]);
              }}
              style={{ width: 'calc(33% - 10px)', margin: '0 5px 5px 0' }}
              key={item}
            >
              {item}
            </Button>
          ))}
        </div>
      </List> */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {paper.map(({ title, data }) => (
          <List renderHeader={<h3>{title}</h3>} key={title}>
            <Chart data={data} style={{ height: 300 }} type="pie" title="" />
          </List>
        ))}
      </div>
    </WingBlank>
  );
};
