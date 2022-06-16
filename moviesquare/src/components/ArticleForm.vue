<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title"></label>
      <input placeholder="title" v-model="newArticle.title" type="text" id="title" class="form-control" />
    </div>
    <div class="form-floating my-3">
      <textarea v-model="newArticle.content" type="text" id="content" placeholder="content" class="form-control" style="height: 100px;"></textarea>
      <label for="content">Content</label>
    </div>
    <div>
      <button class="btn">{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ArticleForm',
    props: {
      article: Object,
      action: String,
    },
    data() {
      return {
        newArticle: {
          title: this.article.title,
          content: this.article.content,
        }
      }
    },

    methods: {
      ...mapActions(['createArticle', 'updateArticle']),
      onSubmit() {
        if (this.action === 'create') {
          this.createArticle(this.newArticle)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.article.pk,
            ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
    },
  }
</script>

<style scoped>
.btn {
  background-color: #6667ab;
  color: white;
  width: 150px;
  height: 50px;
  font-size: 1.3rem;
} 
form input{
  height: 50px;
  width: 100%;
}
form input:focus{
  box-shadow: 0 4px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}

form textarea:focus{
  box-shadow: 0 4px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}
</style>
