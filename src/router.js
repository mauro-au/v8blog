import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('./components/Index')
const About = () => import('./components/About')
const Contact = () => import('./components/Contact')
const Post = () => import('./components/Post')
import Article from './components/Article'
import NotFound from './components/NotFound'
import Admin from './components/Admin'

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
            path: '/home',
            redirect: { name: 'index'}
        },
        {
            path: '/inicio',
            redirect: { name: 'index' }
        },
        {
            path: '/portada',
            redirect: { name: 'index' }
        },
        {
            path: '/administrador/:admin',
            component: Admin,
            props: (route) => ({
                admin: `${route.params.admin}`
            })
        },
        {
            path: '/sobremi',
            component: About,
            name: 'about',
            alias: ['/acerca']
        },
        {
            path: '/contacto',
            component: Contact,
            name: 'contact',
            alias: ['/contactame']
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
