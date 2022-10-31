import { IPaper } from '@/components/FormComponent';
const handleData = (data: string | string[]) => {
  if (typeof data == 'string') {
    return data.split(/\n/).map(item => item.trim());
  }
  return data;
};

export const formData: IPaper[] = [
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
    title: '你的性别 ',
    data: `男
    女`,
  },
  {
    title: '你的年龄 ',
    data: `28岁以下 
    28-35岁（含35岁） 
    35-40岁（含40岁）`,
  },
  {
    title: '你的文化程度',
    data: `大专及以下 
    本科
    研究生及以上`,
  },
  {
    title: '你的工作岗位',
    data: `中层管理人员
    一般管理人员
    技术人员
    生产人员`,
  },
  {
    title: '你的工作年限',
    data: `1-3年（含3年）
    3-5年（含5年）
    5-10年 （含10年）
    10-15年（含15年） 
    15年以上`,
  },
  {
    title: '你认为自己的才能在目前岗位中',
    data: `业绩突出
    表现良好 
    中规中矩 
    差强人意
    不胜任`,
  },
  {
    title: '你对目前岗位所需的知识技能的了解程度',
    data: `非常了解
    比较了解
    基本了解
    不了解
    非常不了解`,
  },
  {
    title: '你能从自己的工作中体验出一种成就感',
    data: `完全同意
    同意
    基本同意
    略有异议
    不同意`,
  },
  {
    title: '你认为当前岗位是否有发展空间？',
    data: `发展空间大，且有信心、有能力做好
    发展空间较大，自身能力有待进一步提升
    发展空间一般，仍愿意本本分分做好本职工作
    发展空间微乎其微，希望换一个岗位`,
  },
  {
    title: '你对自己的职业生涯有明确规划吗？',
    data: `有，正按照目标努力
    不明确，先干干再说
    暂时没有，关于职业生涯规划方面需要指点
    没有，无长远考虑`,
  },
  {
    title: '你对未来个人发展，更倾向于',
    data: `专业技术方向
    行政管理方向
    技能操作方向`,
  },
  {
    title: '你对行业未来发展有信心吗？',
    data: `信心十足，未来大有可为
    较有信心，总体前景尚好
    有所担忧，未来发展不明确
    没有信心，看不到未来发展
    无所谓`,
  },
  {
    title: '以下能够吸引你愿意留在行业（公司）的因素有？',
    data: `公司的品牌以及行业影响力
    公司的发展前景
    个人的发展空间
    工作的氛围
    当前薪酬待遇较为满意
    没有别的更好的工作机会
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你对行业（企业）十四五规划重点的了解程度',
    data: `完全没听说
    知道有这么件事
    知道部分关键词
    知道和我岗位相关的要求
    充分了解十四五举措`,
  },
  {
    title: '你最关心公司的哪些发面',
    data: `生产经营状况
    机构改革
    人事变动
    工资制度改革
    住房制度及社会保障制度
    只关注本职工作或本专业方面的信息
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你能否适应行业（企业）柔性化生产和一岗多能的要求？',
    data: `完全可以
    不断适应
    勉强适应
    有些吃力
    无法适应`,
  },
  {
    title: '在学习和成长机会方面，过去的一年里企业',
    data: `给了我很多机会
    给了我一些机会
    没给什么机会
    根本不会有机会`,
  },
  {
    title: '你认为自己的能力与在职岗位的匹配度',
    data: `非常符合
    符合
    基本符合
    不符合`,
  },
  {
    title: '如果企业发展需要我进一步学习新东西，做以前没做过的工作，我的态度是',
    data: `很愿意
    可以接受
    不太愿意
    很不愿意`,
  },
  {
    type: 'checkbox',
    maxLength: 2,
    title: '你觉得衡量个人成长成才的重要指标是什么？',
    data: `专业技术、技能、管理能力的提升
    专业职称、职业资格、技能等级的提升
    职务、职级的提升
    做出突出贡献、获得荣誉表彰
    获得更多工作、学习、锻炼的机会
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 2,
    title: '你觉得个人哪方面能力急需提升？',
    data: `个人业务能力和工作经验不足
    缺乏对岗位专业系统学习提升
    欠缺工作创新创造能力
    缺乏计划、组织、协调能力
    缺乏对行业新模式新业态新技术的知识储备
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '如果你的能力不能得到充分发挥，最主要的原因是？',
    data: `自身专业限制
    工作缺乏挑战
    缺少发展潜能的机会
    受公司管理制度制约
    人际关系复杂，工作氛围不和谐
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '在个人成长方面，你更倾向于哪种激励方式？',
    data: `薪酬待遇
    福利待遇
    培训机会
    职务晋升
    提供更多的学习、培训机会
    荣誉表彰
    心理关爱和帮扶
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '你觉得哪类培训是最需要的',
    data: `职业技能鉴定培训
    针对具体项目的专业技能拓展培训
    思想政治教育学习
    学历进修
    新增长极、增长点所涉及的业务技能培训
    综合素质培训（摄影、公文写作、PPT技巧、演讲等）
    心理解压课程
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你对公司共青团开展活动的态度是？',
    data: `非常欢迎，积极参加
    如果与个人的事情不冲突，愿意参加
    看看是否感兴趣，选择性参加
    不太愿意，被动参加
    参加不参加无所谓
    从不参加`,
  },
  {
    type: 'checkbox',
    title: '目前，你最喜欢团组织开展哪类活动？',
    data: `思想政治学习、形势报告
    公司业务相关学习与培训
    与行业内外其他团组织联合开展的共创共建活动
    观影、观展等“走出去”类活动
    志愿者服务活动
    文体娱乐素质拓展活动
    个人发展规划和目标定制相关培训
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    title: '你认为公司团组织在那方面发挥的作用较大',
    data: `评先树优工作显著，开展团员青年的荣誉评选工作，激励青年争优创先作用明显
    举办各类赛事活动，为团员青年搭建的舞台更加广阔，促进青年发展作用明显
    维护青年员工权益，各级公司领导听取青年意见的渠道更加通畅，桥梁纽带作用明显
    积极帮助青年员工，解决青年员工工作和生活难题的办法更多，服务青年作用明显
    没有太大感觉
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '面对当前发展形势，你认为共青团最重要要做好哪方面工作？',
    data: `工作方法与形式进一步创新，全方位服务青年成长成才
    工作内容要结合青年特点，更好贴近和服务青年需求
    了解青年日常工作情况，增加与业务部门的交流协作
    加强与公司党政联系，以便获得资源和支持`,
  },
  {
    type: 'checkbox',
    title: '你最希望公司团委开展哪项活动？',
    data: `思想政治学习
    技能提升比武
    心理健康服务
    青年文体活动
    志愿服务活动
    读书联谊活动
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 2,
    title: '你希望公司可以给你提供什么样的技能提升帮助？',
    data: `邀请外部专家开展专题授课
    丰富渠道了解行业（企业）最新动态
    参加企业外的技能比武竞赛
    公司内部轮岗交流及培训
    开展师带徒强化个人技能
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '你认为所在企业的青年工作哪些方面需要加强？',
    data: `企业要更多地了解青年的需要
    企业的管理措施要与青年的特点匹配
    企业应该给予青年更多的培训
    企业要让青年负责更多的项目
    企业要制定青年职业发展规划
    企业要帮助青年解决实际生活困难
    团干部的工作作风要更加务实
    党政领导要多参加以青年员工为主体的活动
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你的日常精神状态如何？',
    data: `非常饱满
    较为良好
    偶尔欠佳
    常感不适
    非常不好`,
  },
  {
    title: '目前的工作生活压力对我来说是可以承受的',
    data: `完全同意
    同意
    基本同意
    略有异议
    不同意`,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '你的压力主要来源',
    data: `业务能力不足，尚未适应当前岗位
    实务工作繁杂，疲于应付，难以出成绩
    单位复杂人际关系
    家庭与工作的权衡
    对晋升空间的担忧
    个人户口落户问题
    个人收入不足以负担家庭支出
    其他 (请写明)`,
    showmore: true,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '你日常通过哪些渠道排解工作压力？',
    data: `寻求党团工会等组织帮助
    与同事、朋友、家人聊天
    去医院找心理咨询师
    宅家电子竞技、刷剧、阅读
    陪伴家人、宠物，参加亲子活动
    体育运动
    美食
    购物
    旅游
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你平均一周读书的时间有多久？',
    data: `10小时以上
    5-10小时
    3-5小时
    1-3小时
    基本不读书`,
  },
  {
    type: 'checkbox',
    title: '你喜欢阅读哪些书籍？',
    data: `专业学术
    党政书籍
    经典文学
    科普读物
    人物传记
    流行杂志
    生活百科
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你平均一周锻炼身体的时间有多久？',
    data: `10小时以上
    5-10小时
    3-5小时
    1-3小时
    基本不锻炼`,
  },
  {
    type: 'checkbox',
    maxLength: 3,
    title: '你在“八小时外”占用时间最多的三项业余活动是？',
    data: `读书学习
    体育健身
    棋牌/麻将
    电子游戏
    照顾家庭和小孩
    手机/电脑浏览信息
    亲友聚餐聚会
    加班工作
    逛街购物
    电视、电影、卡拉OK
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你对自己“八小时外”的生活总体满意度怎样？',
    data: `非常满意
    基本满意
    一般
    不满意`,
  },
  {
    title: '你认为企业对青年员工心理关爱和帮扶有必要吗？',
    data: `有必要，心理压力很大
    有必要，但是要保护个人的隐私
    没必要，自己的事情自己解决
    无所谓`,
  },
  {
    type: 'checkbox',
    maxLength: 2,
    title: '如果开展职工身心健康关爱服务，你更期待怎样的形式?',
    data: `开展趣味集体活动
    开设专家讲座、主题沙龙
    线上微课，如婚恋亲子、放松减压、自我认知
    邀请心理咨询师，进行专业心理咨询辅导
    其他 (请写明)`,
    showmore: true,
  },
  {
    title: '你对公司丰富员工“八小时外”的生活还有哪些建议和期望？',
    type: 'textarea',
  },
].map(item => {
  let type = item?.type;
  if (!type) {
    type = 'radio';
  }
  if (['select', 'radio', 'checkbox'].includes(type)) {
    return {
      ...item,
      type,
      data: handleData(item.data),
    };
  }
  return {
    ...item,
    type,
  };
});
