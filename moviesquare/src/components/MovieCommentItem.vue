<template>
  <div class="comment-list-item">
    <router-link class="profile mx-2" :to="{name: 'profile', params:{username: movie.user.username}}">
      <span> {{ movie.user.username }} : </span>
    </router-link>
    <span v-if="!isEditing" class="contentfont">{{ movie.content }} </span>
    <div>
      <span v-if="currentUser.username === movie.user.username && !isEditing">
        <button class=" btn btn-default" @click="deleteMovieComment(payload)">Delete</button>
      </span>
    </div>
    <hr>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieCommentItem',
  data() {
    return {
      isEditing: false,
       payload: {
          movieId: this.$route.params.id,
          movieCommentPk: this.movie.pk,
          content: this.movie.content
       },
    }
  },
  props: { movie : Object },
  computed: {
    ...mapGetters(['currentUser',]),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteMovieComment']),
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
hr{
  background-color: #6667ab;
}
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
  margin-left: 5px;
  margin-top: 10px;
}
.btn-warning{
  font-size: 13px;
}
</style>