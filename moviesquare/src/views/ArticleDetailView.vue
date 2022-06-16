<template>
  <div class="container my-5">
    <div class="allcontent">
      <h1>{{ article.title }}</h1>
      <hr>
      <p class="content my-3 p-2">
        {{ article.content }}
      </p>
      <!-- Article Edit/Delete UI -->
      <div class="my-4" v-if="isAuthor">
        <router-link :to="{ name: 'articleEdit', params: { articlePk } }">
          <button class="btn btn-default">Edit</button>
        </router-link>
        |
        <button class="btn btn-warning text-white" @click="deleteArticle(articlePk)">Delete</button>
      </div>

      <!-- Article Like UI -->
      <div class="py-3">
        <button class="btn-like"
          @click="likeArticle(articlePk)"
        ><i class="fa-solid fa-heart">
          {{ likeCount }}
          </i>
        </button>
      </div>

      <hr />
      <!-- Comment UI -->
      <comment-list class="commentlist" :comments="article.comments"></comment-list>
      <hr>
      <router-link :to="{ name: 'community'}" class="btn btn-default2"> Back </router-link>
    </div>
  </div>
  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'



  export default {
    name: 'ArticleDetail',
    components: { CommentList },
    data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article']),
      likeCount() {
        return this.article.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchArticle',
        'likeArticle',
        'deleteArticle',
      ])
    },
    created() {
      this.fetchArticle(this.articlePk)
    },
  }
</script>

<style scoped>
hr{
  color: #6667ab;
}
.container{
  box-shadow: 0 25px 45px rgba(0,0,0,0.1); ;
  border-radius: 15px;
  border : 2px solid #6667ab;
  padding: 30px;
  background-color: rgba(255,255,255,0.1);
}
.container .content{
  font-size: 30px;
}
.container .allcontent{
  padding: 10px 30px;
  
}
.container h1{
  font-family: "Oswald", sans-serif;
  color: #6667ab;
}

.container .btn-default{
  color: white;
  background-color: #6667ab;
}
.container .btn-default2{
  color: white;
  background-color: #6667ab;
  margin-top: 20px;
}
.container .btn-like{
  border: none;
  border-radius: 15px;
  background-color: red;
  color: white;
}
</style>
