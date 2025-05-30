const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/employee', component: employee },
    { path: '/department', component: department }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const { createApp } = Vue

const app = createApp({})
app.use(router)
app.mount('#app')