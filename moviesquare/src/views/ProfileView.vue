<template>
  <div class="container my-5">
    <h1>{{ profile.username }} 님의 프로필</h1>
    <hr>
    <h2><i class="fa-solid fa-pencil"></i>작성한 글</h2>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link class="listyle" :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <h2><i class="fa-solid fa-thumbs-up"></i>좋아요 한 글</h2>
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link class="listyle" :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style scoped>
.container {
  font-family: "Nanum+Gothic+Coding", sans-serif;
  box-shadow: 0 25px 45px rgba(0,0,0,0.1); ;
  border-radius: 15px;
  border : 2px solid #6667ab;
  padding: 30px;
  background-color: rgba(255,255,255,0.1);
  width: 500px;
}
.container h1{
  font-size: 40px;
  margin-bottom: 20px;
  color: #6667ab;
  font-weight: bold;

}
.container h2{
  margin-bottom: 10px;
}
.container ul{
  list-style : none;
   margin-bottom: 50px;
}
.container ul .listyle {
  text-decoration: none;
  color: #6667ab;
 
}
i {
  margin-right: 10px;
  text-align: center;
  font-size: 25px;
  color: #6667ab;
}
hr{
  margin-bottom: 50px;
}
</style>
