import Judge from './judge.js';
const formDataList = [{
    title: '应聘岗位',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'ypgw',
  },
  {
    title: '填表日期',
    isNecessary: true,
    isRed: false,
    dataType: 'sel',
    id: 'tbrq'
  },
  {
    title: '姓名',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'xm'
  },
  {
    title: '性别',
    isNecessary: true,
    isRed: false,
    dataType: 'sel',
    id: 'xb'
  },
  {
    title: '出生日期',
    isNecessary: true,
    isRed: false,
    dataType: 'sel',
    dateSel: true,
    id: 'csrq'
  },
  {
    title: '民族',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'mz'
  },
  {
    title: '政治面貌',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'zzmm'
  },
  {
    title: '婚否',
    isNecessary: true,
    isRed: false,
    dataType: 'sel',
    dateSel: true,

    id: 'hf'
  },
  {
    title: '健康状况',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'jkzk'
  },
  {
    title: '籍贯（省、市）',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'jg'
  },
  {
    title: '联系方式',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'lxfs'
  },
  {
    title: '电子邮箱',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'dzyx'
  },
  {
    title: '学历',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'xl'
  },
  {
    title: '现住地',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'xzd'
  },
  {
    title: '目前是否在职',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'sfzz'
  },
  {
    title: '预计到岗时间',
    isNecessary: true,
    isRed: false,
    dataType: 'sel',
    dateSel: true,
    id: 'dgsj'
  },
  {
    title: '期望薪资',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'qwxz'
  },
  {
    title: '外语水平',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'wysp'
  },
  {
    title: '计算机水平',
    isNecessary: true,
    isRed: false,
    dataType: 'inp',
    id: 'jsjsp'
  },
  {
    title: '教育经历（请至少完整填写一行）',
    isRed: false,
    isNecessary: true,
    dataType: 'table',
    tableData: ['时间', '毕业院校', '专业', '详细情况'],
    id: 'jyjl'
  },
  {
    title: '工作经历（请至少完整填写一行，没有则写',
    isRed: true,
    isNecessary: true,
    dataType: 'table',
    tableData: ['时间', '公司名称', '职务', '职责'],
    id: 'gzjl'
  },
  {
    title: '个人荣誉',
    isNecessary: false,
    isRed: false,
    dataType: 'inp',
    id: 'grry'
  },
  {
    title: '兴趣特长',
    isNecessary: false,
    isRed: false,
    dataType: 'inp',
    id: 'xqtc'
  },
  {
    title: '自我评价',
    isRed: false,
    isNecessary: true,
    dataType: 'textarea',
    id: 'zwpj'
  },
]
init();

function init() {
  let ul = document.querySelector('.form-list');
  let frg = document.createDocumentFragment();
  for (let i = 0; i < formDataList.length; i++) {
    let index = new Judge(formDataList[i]);
    index.appendTo(frg);
  }
  ul.appendChild(frg);
}