<template>
  <header>
    <TheLogo class="logo"></TheLogo>
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <router-link
          :to="nav.href"
          exact-active-class="active"
          :class="{active:isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </router-link>
      </div>
    </div>
    <div v-if="isLogin"
      class="nav nav-pills">
      <div
        v-for="profile in profiles"
        :key="profile.name"
        class="nav-item">
        <router-link
          :to="{ name: 'profile', params:{username} }"
          exact-active-class="active"
          class="nav-link">
          {{profile.name}}
        </router-link>
      </div>
    </div>
    <div v-if="!isLogin" class="nav logstatus">
      <div class="nav-item"
        v-for="log in logstatus"
        :key="log.name">
        <router-link
          :to="log.href"
          class="nav-link">
          {{ log.name }}
        </router-link>
      </div>
    </div>
    <div v-else class="nav logstatus">
      <div class="nav-item"
        v-for="logo in logout"
        :key="logo.name">
        {{currentUser.username}}님 환영합니다.
        <router-link
          :to="logo.href"
          class="nav-link">
          {{logo.name}}
        </router-link>
        </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
import TheLogo from '../components/TheLogo.vue'
export default {
  components: {
    TheLogo
  },
  data(){
    return{
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/:id',
          path: /^\/movie/
        },
        {
          name: 'Community',
          href: '/articles/',
        },
        {
          name: 'Recommend Movie',
          href: '/recommendmovie',
        }
      ],
      logstatus: [
        {
          name: 'Sign up',
          href: '/signup' ,
        },
        {
          name: 'Log in',
          href: '/login'
        },
      ],
      logout: [
        {
          name: 'Log out',
          href: '/logout'
        }
      ],
      profiles:[
        {
          name: 'Profile',
          href: '/profile/:username',
          path: /^\/profile/,
        }
      ],
      isLogin : false,
      showLogin : false,
      showSignup : false,
    }
  },
  updated : function(){
    const token = this.$store.state.accounts.token
    
    if (token){
      this.isLogin = true
    } else {
      this.isLogin = false
    }
   
  },

  created : function(){
    const token = this.$store.state.accounts.token
    
    if (token){
      this.isLogin = true
    } else {
      this.isLogin = false
    }
   
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      return path.test(this.$route.fullPath)
    },
  },
  computed:{
    ...mapGetters(['currentUser']),
     username(){
      return this.currentUser.username ? this.currentUser.username: 'guest'
    }
  },
}
//asdfasdfasdfasdfasd
</script>

<style scoped>
header{
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  font-weight: 600;

}

header .nav-link {
  color:#6667ab;   
}
header .nav-link.active{
  background-color:#6667ab;
}

header .logstatus .nav-item {
  display: flex;
  align-items: center;
  color: #6667ab;
}

.logo{
  margin-right: 40px;
}

header .logstatus {
  margin-left: auto;
}


@media (max-width: 1091px){
  .nav{
    display: none;
  }
}

</style>
