<template>
  <footer>
    <div class="logo">
    <Logo />
    </div>
    <a href="#" target="_blank">
      (c){{ new Date().getFullYear() }} 5조
    </a>
  </footer>


</template>

<script>
import Logo from './TheLogo.vue'
export default {
  components:{
    Logo
  }
}
</script>

<style scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
}
.logo{
  margin-bottom: 4px;
}
footer a{
  color: #6667ab;
  text-decoration: none;
  font-weight: bold;
}
</style>