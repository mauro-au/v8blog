import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Article from './components/Article'
import NotFound from './components/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            name: 'index'
        },
        {
            path: '/sobremi',
            component: About,
            name: 'about'
        },
        {
            path: '/contacto',
            component: Contact,
            name: 'contact'
        },
        {
            path: '/post/:id',
            component: Post,
            name:'post',
            children:[
                {
                    path:'articulo',
                    component: Article,
                    name: 'article'
                }
            ]
        },
        {
            path: '*',
            component: NotFound

        }
    ]
})
