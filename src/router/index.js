 // 该文件专门用于创建整个应用的路由器
 import VueRouter from 'vue-router'
 //引入组件
 import Msite from '../pages/Msite/Msite.vue'
 import Order from '../pages/Order/Order.vue'
 import Profile from '../pages/Profile/Profile.vue'
 import Search from '../pages/Search/Search.vue'
 import Login from '../pages/Login/Login.vue'
 //创建并暴露一个路由器
 export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite'  //默认路由，进入首页
        },
        {
            path:'/login',
            component:Login
        }
    ]
 })