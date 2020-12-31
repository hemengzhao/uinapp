// router/modules/home.js
const login = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/login/login',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'login',
        meta: {
	        title: '登陆',
	    },
    },
    {
	    path: '/pages/register/register',
        name: 'register',
        meta: {
	        title: '注册',
	    },
	},
	{
	    path: '/pages/setPassword/setPassword',
	    name: 'setPassword',
	    meta: {
	        title: '修改密码',
	    },
	},
]
export default login