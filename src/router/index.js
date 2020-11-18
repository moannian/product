import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/Home.vue');
const Abuot = () =>
    import ('../views/about.vue')
const Classfy = () =>
    import ('../views/calssfy.vue');
const Profile = () =>
    import ('../views/profile.vue')
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/home',
        component: Home
    }, {
        path: "/about",
        component: Abuot
    }, {
        path: '/calssfy',
        component: Classfy
    },
    {
        path: '/profile',
        component: Profile
    }

]
const originalPush = VueRouter.prototype.push
    // 在原型上添加push？
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes
})

export default router