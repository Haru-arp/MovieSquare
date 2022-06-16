<template>
  <li class="comment-list-item">
    <router-link class="profile" :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    
    <span class="contentfont" v-if="!isEditing">{{ payload.content }}</span>
    <div class="btncontainer my-1">
      <span v-if="isEditing">
        <input class="form-control" type="text" v-model="payload.content">
        <button class="btn btn-default" @click="onUpdate">Update</button>
      </span>
    </div>
    <div class="btncontainer my-1">
      <span class="edbutton" v-if="currentUser.username === comment.user.username && !isEditing">
        <button class="btn btn-default" @click="switchIsEditing">Edit</button> |
        <button class="btn btn-warning text-white" @click="deleteComment(payload)">Delete</button>
      </span>
    </div>

  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style scoped>
li{
  list-style:none;
}
.comment-list-item{
  margin-top: 15px;
}
.comment-list-item .profile{
  text-decoration: none;
  color: #6667ab;
  font-size: 1.2rem;
  margin-left: 10px;
}
.comment-list-item .contentfont{
  font-size: 1.2rem;
}
.comment-list-item .btncontainer{
  margin-left: 10px;
}
.comment-list-item .btncontainer input{
  width: 500px;
  margin-bottom: 15px;
}
.comment-list-item .btncontainer input:focus{
  box-shadow: 0 4px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}
.btn-default{
  color: white;
  background-color: #6667ab;
  font-size: 13px;
}
.btn-warning{
  font-size: 13px;
}
</style>