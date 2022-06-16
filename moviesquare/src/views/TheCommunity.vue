<template>
  <div class="container p-5 my-4">
    <h1 class="namefont">The community</h1>
    <router-link
      :to="{ name: 'ArticleNewView'}">
        <div class="namefont2 btn mx-3 my-2">{{ newArticle.name }}</div>
    </router-link>
    <div class="cardview d-flex flex-wrap justify-content-center">
      <div class="card text-center my-3 mx-2" style="width: 18rem;" v-for="article in articles" :key="article.pk">
        <div class="card-body my-3">
          <!-- 작성자 -->
          <p>{{ article.user.username }} 님의 게시글 </p>
          <h4>{{article.title}}</h4>
          <!-- 댓글 개수/좋아요 개수 -->
          <p><i class="fa-solid fa-comment"></i> {{ article.comment_count }} | <i class="fa-solid fa-thumbs-up"></i> {{ article.like_count }}</p>
          <!-- 글 이동 링크 (제목) -->
          <router-link 
            :to="{ name: 'article', params: {articlePk: article.pk} }">
            <button class="btn">Go Detail</button>
          </router-link>
          
        </div>
      </div>  

    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'ArticleList',
    data(){
      return {
        newArticle: {
          name: 'New Article',
        }
      }
    },
    computed: {
      ...mapGetters(['articles'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style scoped>
.btn {
  background-color: #6667ab;
  color: white;
}
.card{
  border: 1px solid #6667ab;
  border-radius: 20px;
  box-shadow: 0 2px 2px #6667ab;
}
.card-body h4{
  color: #6667ab;
  font-weight: 600;
}
.namefont{
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
}
.namefont2{
  font-family: "Oswald", sans-serif;
  
}

i{
  color: #6667ab;
}

</style>
