import Vue from 'vue'
import Vuex from 'vuex'
import accounts from './modules/accounts'
import createPersistedState from 'vuex-persistedstate'
import movie from './modules/movie'
import articles from './modules/articles'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [
      createPersistedState({
        paths: ['accounts',]
      })
    ],
    modules:{
      movie, 
      accounts,
      articles,
 
    },
})
