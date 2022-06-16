<template>
  <div class="container my-5">
    <h1>Edit Article</h1>
    <article-form v-if="isArticle" :article="article" action="update">

    </article-form>
  </div>

</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'AritcleEditView',
    components: { ArticleForm },
    computed: {
      ...mapGetters(['article', 'isArticle',])
    },
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created() {
      this.fetchArticle(this.$route.params.articlePk)
    },
  }
</script>

<style scoped>
.container{
  box-shadow: 0 25px 45px rgba(0,0,0,0.1); ;
  border-radius: 15px;
  border : 2px solid #6667ab;
  padding: 30px;
  background-color: rgba(255,255,255,0.1);
}
</style>
