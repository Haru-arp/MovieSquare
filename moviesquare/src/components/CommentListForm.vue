<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment"></label>
    <input class="form-control" placeholder="Comment" type="text" id="comment" v-model="content" required>
    <button class="btn">OK</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ articlePk: this.article.pk, content: this.content, })
      this.content = ''
    }
  }
}
</script>

<style scoped>
.comment-list-form{
  display: flex;
}
.comment-list-form .form-control {
  height: 50px;
}
.comment-list-form input:focus{
  box-shadow: 0 4px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}
.btn {
  background-color: #6667ab;
  color: white;
  width: 120px;
  height: 50px;
  font-size: 1.3rem;
  margin-left: 20px;
} 
</style>