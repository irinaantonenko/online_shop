import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import CatalogMain from '../components/catalog/CatalogMain.vue'
import CatalogCart from '../components/cart/CatalogCart.vue'

let routes = [
    {
        path: '/',
        name: 'catalog',
        component: CatalogMain
    },
    {
        path:'/cart',
        name: 'cart',
        component: CatalogCart,
        props: true
    }
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;
const app = createApp({})
app.use(router)