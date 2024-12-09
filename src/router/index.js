import { createRouter, createWebHistory } from "vue-router";
import Reviews from "../components/principales/reviews/Reviews.vue";
import HomePage from "../components/pages/HomePage.vue";
import ReviewSerie from "../components/pages/ReviewSerie.vue";
import SearchResults from "../components/pages/SearchResults.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: Reviews
        },
        {
            path: '/review-serie/:id',
            name: 'reviewSerie',
            component: ReviewSerie
        },
        {
            path: '/buscar-serie/:serie',
            name: 'buscarSerie',
            component: SearchResults
        },
    ]
})


export default router
