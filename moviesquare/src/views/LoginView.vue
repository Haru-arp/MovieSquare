<template>
  <div class="container">
    <div class="imgframe">
      <img src="../assets/endgame.jpg"
      alt="영화포스터">
    </div>
    <div class="loginform">
      <div class="Logo">
        <span>Movie</span>&nbsp;Square
      </div>
      <div>
        <span>Sign into your account</span>
      </div>
      <account-error-list v-if="authError"></account-error-list>
      <form @submit.prevent="login(credentials)">
        <div>
          <label for="username"></label>
          <input placeholder="Id" v-model="credentials.username" type="text" id="username" required />
        </div>

        <div>
          <label for="password"></label>
          <input placeholder="Password" v-model="credentials.password" type="password" id="password" required />
        </div>

        <button>Login</button>
        <div class="forget">
          <span class="first">Don't have an account ?</span>
          <span class="second"><router-link :to="{ name: 'signup'}">Sign up</router-link></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
          logined : false,
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login']),
    },

  }
</script>

<style scoped>
.container {
  margin-top: 100px;
  background-color: white;
  width: 1200px;
  height: 650px;
  border-radius: 40px;
  box-shadow: 0 5px 5px rgb(91, 91, 91, .6);
  display: flex;
  overflow: hidden;
  padding: 0;
}
.container .imgframe img{
  margin-left: 0px;
  width: 460px;
  height: 100%;
  overflow: hidden;
}
.container span{
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 30px;
}
.container .loginform{
  margin-top: 100px;
  margin-left: 180px;
}

form input{
  margin-top: 20px;
  width: 350px;
  height: 50px;
  letter-spacing: 1px;
  padding: 10px 20px;
}
form input::placeholder{
  color: #6667ab;
  font-family: 'Oswald', sans-serif;
}
form input:focus{
  box-shadow: 0 2px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}
form button{
  border: none;
  margin-top: 20px;
  width: 350px;
  height: 50px;
  letter-spacing: 1px;
  background-color: #6667ab;
  font-family: 'Oswald', sans-serif;
}
.forget{
  margin-top: 20px;
}
.forget .first{
  font-size: 15px;
}
.forget .second{
  font-size: 15px;
  margin-left: 15px;
}
.forget .second > a{
  color: #6667ab;
  
}
.Logo{
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  color: #454545;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: -1px;
}
.Logo:hover{
  color: #454545;
}
.Logo span{
  color: #6667ab;
  font-weight: bold;
  
}
</style>
