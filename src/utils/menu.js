// let menu = [
//     {
//         index:'create',
//         name:'订单录入',
//         icon:'edit'
//     },{
//         index:'audit',
//         name:'订单审核',
//         icon:'solution'
//     },{
//         index:'search',
//         name:'订单查询',
//         icon:'search'
//     },{
//         index:'show',
//         name:'进度展示',
//         icon:'bars'
//     },{
//         index:'purchase',
//         name:'原料配置',
//         icon:'gold'
//     },{
//         index:'production',
//         name:'订单生产',
//         icon:'redo'
//     },{
//         index:'transport',
//         name:'产品运输',
//         icon:'shopping-cart'
//     },{
//         index:'question',
//         name:'问题反馈',
//         icon:'question-circle'
//     }
// ]

const menu = [{
  index: 'data',
  name: '数据处理',
  icon: 'edit',
  children: [{
      index: 'objBuilder',
      name: '实体编辑',
      path: '/objBuilder',
    },
    {
      index: 'relBuilder',
      name: '关系编辑',
      path: '/relBuilder',
    },
    {
      index: 'dataBio',
      name: '数据标注',
      path: '/dataBio',
    },
  ]
}, {
  index: 'graphbuilder',
  name: '图谱构建',
  icon: 'dot-chart',
  children: [{
    index: 'dataBuilder',
    name: '抽取构建',
    path: '/dataBuilder',
  }, {
    index: 'genera',
    name: '图谱生成',
    path: '/genera',
  }, ],
}, {
  index: 'manage',
  name: '系统管理',
  icon: 'solution',
  children: [{
    index: 'user',
    name: '用户管理',
    path: '/user'
  }, ],
}]
export default menu;
