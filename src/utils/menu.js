let menu = [
    //一级菜单
    {
        index:'orderManage',
        name:'订单管理',
        icon:'',
        children:[
            {
                index:'create',
                name:'订单录入',
                icon:'edit',
            },{
                index:'audit',
                name:'订单审核',
                icon:'solution'
            },{
                index:'search',
                name:'订单查询',
                icon:'search'
            }
        ],
    }, {
        index:'orderDispatch',
        name:'订单调度',
        icon:'',
        children:[
            {
                index:'dispatch',
                name:'新增调度计划',
                icon:'edit'
            },{
                index:'dispatchShow',
                name:'调度结果查看',
                icon:'solution'
            }
        ],
    }, {
        index:'show',
        name:'进度展示',
        icon:'bars',
        children:[],
    }, {
        index:'set',
        name:'系统设置',
        icon:'set',
        children:[
            {
                index:'userInfo',
                name:'个人信息',
                icon:''
            },{
                index:'paramSet',
                name:'调度参数设置',
                icon:''
            },{
                index:'user',
                name:'用户管理',
                icon:''
            }
        ],
    },
]

export default menu;