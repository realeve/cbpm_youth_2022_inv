const handleData = (data: string | string[]) => {
  if (typeof data == 'string') {
    return data.split(/\n/).map(item => item.trim());
  }
  return data;
};
export const formData = [
  {
    type: 'select',
    title: '你所在企业 ',
    data: `中国印钞造币集团有限公司本部
    成都印钞有限公司
    北京印钞有限公司
    上海印钞有限公司
    西安印钞有限公司
    石家庄印钞有限公司
    南昌印钞有限公司
    广州印钞有限公司
    南京造币有限公司
    上海造币有限公司
    沈阳造币有限公司
    保定钞票纸业有限公司
    昆山钞票纸业有限公司
    中钞印制技术研究院有限公司
    中钞特种防伪科技有限公司
    中钞油墨有限公司
    北京中钞钞券设计制版有限公司
    中钞实业有限公司
    中钞光华印制有限公司
    中钞华森实业有限公司
    中钞信用卡产业发展有限公司
    中钞长城金融设备控股有限公司
    中钞国鼎投资有限公司
    中钞晟昌（北京）运营管理有限公司`,
  },
  {
    type: 'select',
    title: '你的性别 ',
    data: `男
    女`,
  },
  {
    type: 'select',
    title: '你的年龄 ',
    data: `28岁以下 
    28-35岁（含35岁） 
    35-40岁（含40岁）`,
  },
].map(item => {
  if (item.type == 'select') {
    return {
      ...item,
      data: handleData(item.data),
    };
  }
});
