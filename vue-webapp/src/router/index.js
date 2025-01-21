import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import product from "@/views/Products.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import ProductsDetail from "@/views/productsDetail.vue";
const routes = [
    { path: '/', component: Home},

    { path: '/about', component: About },

    { path: '/Product', component: product },

    { path: '/productsDetail', 
        name: 'Productsdetail',
        component: ProductsDetail,
        props: true,
    },

    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },

    {
        path: "/products/:id",
        name: "ProductsDetail",
        component: ProductsDetail,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;