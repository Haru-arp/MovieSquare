<template>
  <div class="comment-list">
    <comment-list-item 
      v-for="comment in comments" 
      :comment="comment" 
      :key="comment.pk">
    </comment-list-item>        

    <comment-list-form class="my-3"></comment-list-form>
  </div>
</template>

<script>
import CommentListItem from '@/components/CommentListItem.vue'
import CommentListForm from '@/components/CommentListForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  components: { CommentListForm, CommentListItem },
  props: { comments: Array },
}
</script>

<style>
/* .comment-list {
  border: 1px solid blue;
} */
</style>