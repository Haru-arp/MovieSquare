<template>
  <div class="comment-list">
    <h3>영화에 대한 개인적인 리뷰를 남겨주세요!</h3>
    <MovieCommentItem 
      v-for="movie in movies"
      :movie="movie"
      :key="movie.pk">
    </MovieCommentItem>        

    <movie-comment-form class="my-3"></movie-comment-form>
  </div>
</template>

<script>
import MovieCommentItem from '@/components/MovieCommentItem.vue'
import MovieCommentForm from '@/components/MovieCommentForm.vue'
// import { mapGetters, mapActions } from 'vuex'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MovieCommentList',
  components: { MovieCommentForm, MovieCommentItem },
  computed:{
    ...mapGetters(['movies'])
  },
  methods: {
    ...mapActions(['fetchMovieComments'])
  },
  created(){
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  },
}
</script>

<style scoped>
.comment-list{
  border: 1px solid #6667ab;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 25px 45px rgba(0,0,0,0.1); 
}
.comment-list h3{
  font-size: 25px;
  letter-spacing: 0.1px;
  color: #6667ab;
  font-weight: bold;
  margin-bottom: 40px;
}
</style>