import Vue from 'vue'
import VueRouter from 'vue-router'
import TheHome from '../views/TheHome.vue'
import TheMovie from '../views/TheMovie.vue'
import TheCommunity from '../views/TheCommunity.vue'
import NotFound from '../views/NotFound.vue'
import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignupView from '@/views/SignupView.vue'
import ArticleNewView from '@/views/ArticleNewView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import ArticleEditView from '@/views/ArticleEditView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RecommendMovie from '@/views/RecommendMovie.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: TheMovie
  },
  {
    path: '/articles/',
    name: 'community',
    component: TheCommunity
  },
  {
    path: '/articles/new',
    name: 'ArticleNewView',
    component: ArticleNewView
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetailView
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: ArticleEditView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/recommendmovie',
    name: 'recommendMovie',
    component: RecommendMovie
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  },
  // {
  //   // path: '/:notFound(.*)',
  //   // component: NotFound
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 이전 페이지에서 발생한 에러메시지 삭제
  store.commit('SET_AUTH_ERROR', null);

  const { isLoggedIn } = store.getters;

  const noAuthPages = ['login', 'signup', 'Home',];

  const isAuthRequired = !noAuthPages.includes(to.name);

  if (isAuthRequired && !isLoggedIn) {
    alert('로그인이 필요한 서비스입니다.');
    next({ name: 'login' });
  } else {
    next();
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'Home' });
  }
});

export default router
