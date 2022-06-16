<template>
  <div class="container">
    <div class="imgframe">
      <img src="../assets/poster.jpg" 
      alt="영화포스터">
    </div>
    <div class="signupform">
      <div class="Logo">
        <span>Movie</span>&nbsp;Square
      </div>
      <div>
        <span>Signup</span> 
      </div>

      <account-error-list v-if="authError"></account-error-list>

      <form @submit.prevent="signup(credentials)">
        <div>
          <label for="username"></label>
          <input placeholder="Id" v-model="credentials.username" type="text" id="username" required/>
        </div>
        <div>
          <label for="password1"></label>
          <input placeholder="Password" v-model="credentials.password1" type="password" id="password1" required />
        </div>
        <div>
          <label for="password2"></label>
          <input placeholder="Confirm Password" v-model="credentials.password2" type="password" id="password2" required />
        </div>
        <div>
          <button>Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
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
  padding: 0;
  overflow: hidden;
}
.container span {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 30px;
}
.container .imgframe img{
  margin-left: 0px;
  width: 460px;
  height: 100%;
  overflow: hidden;
}
.container .signupform {
  margin-top: 70px;
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
.Logo span {
  color: #6667ab;
  font-weight: bold;
}
</style>
