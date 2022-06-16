<template>
  <div class="container my-5">
    <h1>New Article</h1>
    <article-form :article="article" action="create"></article-form>
  </div>
</template>

<script>
  import ArticleForm from '@/components/ArticleForm.vue'
  export default {
    name: 'AritcleNewView',
    components: { ArticleForm },
    data() {
      return {
        article: {
          pk: null,
          title: '',
          content: '',
        }
      }
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
.container h1{
  font-family: 'Oswald', sans-serif;
}
</style>
