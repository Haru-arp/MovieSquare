<template>
  <div class="container">
    <div
       :class="{'no-result': !movies.length }" 
        class="inner">
        <TheLoader v-if="loading" />
        <div 
          v-if="message"
          class="message">
          {{ message }} 
        </div>
        <div 
          v-else
          class="movies">
          <MovieItem
            v-for="movie in movies"
            :key="movie.imdbID"
            :movie="movie" />
        </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
import TheLoader from './TheLoader.vue'
export default {
  components:{
    MovieItem,
    TheLoader,
  },
  computed: {
    movies(){
      return this.$store.state.movie.movies
    },
    message(){
      return this.$store.state.movie.message
    },
    loading(){
      return this.$store.state.movie.loading
    }
  }
}
</script>

<style scoped>
.container{
   background-color: rgb(230, 230, 230, 0.6);
   margin-top: 20px;
   border-radius: 5px;
   padding: 10px 0;
   text-align: center;
}

.container .inner .message{
  color: rgb(174, 174, 174);
  font-size: 20px;
}
.container .no-result {
  padding: 70px 0;
  margin: 0 auto;
}
.container .movies{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.spinner-border{
  color: #6667ab;   
}

</style>