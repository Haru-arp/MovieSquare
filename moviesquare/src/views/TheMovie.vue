<template>
  <div class="container">
    <template v-if="loading">
      <div class="skeletons">
        <div class="skeleton poster"></div>
        <div class="specs">
          <div class="skeleton title"></div>
          <div class="skeleton spec"></div>
          <div class="skeleton plot"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
          <div class="skeleton etc"></div>
        </div>
      </div>
      <TheLoader 
        :size="3"
        :z-index="9"
        fixed />
    </template>
    <div 
      v-else
      class="movie-details">
      <div 
        :style="{ backgroundImage: `url(${requestDiffSizeImage(theMovie.Poster)})` }"
        class="poster"></div>
      <div class="specs">
        <div class="title">
          {{ theMovie.Title }}
        </div>
        <div class="labels">
          <span>{{ theMovie.Released }}</span>
          <span>{{theMovie.Runtime }}</span>
          <span>{{ theMovie.Country }}</span>
        </div>
        <div class="plot">
          {{ theMovie.Plot }}
        </div>
        <div class="ratings">
          <h3>Ratings</h3>
          <div class="rating-wrap">
            <div
              v-for="{Source: name, Value: score} in theMovie.Ratings"
              :key="name"
              :title="name"
              class="rating">
              <img 
              :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`"  
              :alt="name">
              <span>{{ score }}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>Actors</h3>
          {{ theMovie.Actors}}
        </div>
        <div>
          <h3>Director</h3>
          {{ theMovie.Director }}
        </div>
        <div>
          <h3>Production</h3>
          {{ theMovie.Production }}
        </div>
        <div>
          <h3>Genre</h3>
          {{ theMovie.Genre }}
        </div>
      </div>
    </div>
    <hr>
    <MovieCommentList />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import TheLoader from '../components/TheLoader.vue'
import MovieCommentList from '../components/MovieCommentList.vue'
export default {
  components: {
    TheLoader,
    MovieCommentList
  },
  computed: {
    theMovie(){
      return this.$store.state.movie.theMovie
    },
    loading(){
      return this.$store.state.movie.loading
    }
  },
  created(){
    const payload = this.$route.params.id
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    }) 
    this.fetchMovieComments(payload)
  },
  mounted(){
    const payload = this.$route.params.id
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    }) 
    this.fetchMovieComments(payload)
  },
  methods: {
    requestDiffSizeImage(url, size=700) {
      if(!url || url==='N/A'){
        this.imageLoading = false
        return ''
      }
      const src = url.replace('SX300', `SX${size}`)
      this.$loadImage(src)
        .then(()=>{
          this.imageLoading = false
        })
      return src
    },
    ...mapActions(['fetchMovieComments','likeMovie']),
    likemovie(){
      this.likeMovie(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.container{
  padding-top: 40px;
}
.container .skeletons{
  display: flex;
  flex-grow: 1;
}
.container .skeletons .poster{
  flex-shrink: 0;
  width: 500px;
  height: 750px;
  margin-right: 70px;
}
.container .skeletons .specs{
  flex-grow: 1;
}
.container .skeletons .skeleton{
  border-radius: 10px;
  background-color: rgb(230, 230, 230)
}
.container .skeletons .title{
  width: 80%;
  height: 70px;
}
.container .skeletons .spec{
  width: 60%;
  height: 30px;
  margin-top: 20px;
}
.container .skeletons .plot{
  width: 100%;
  height: 250px;
  margin-top: 20px;

}

.container .skeletons .etc{
  width: 50%;
  height: 50px;
  margin-top: 20px;

}

.movie-details{
  display: flex;
  color: gray;
}
.movie-details .poster{
  flex-shrink: 0;
  width: 500px;
  height: 750px;
  margin-right: 70px;
  border-radius: 10px;
  background-color: gray;
  background-size: cover;
  background-position: center;

}
.movie-details .specs{
  flex-grow: 1;
}
.movie-details .specs .title{
  color: black;
  font-family: 'Oswald',sans-serif;
  font-size: 70px;
  line-height: 1;
  margin-bottom: 30px;
}
.movie-details .specs .labels{
  color: #6667ab;
}
.movie-details .specs .labels span::after{
  content:"\00b7";
  margin: 0 6px;
}
.movie-details .specs .labels span:last-child::after{
  display: none;
}
.movie-details .specs .plot{
  margin-top: 20px;
}
.movie-details .specs .ratings .rating-wrap {
  display: flex;
}
.movie-details .specs .ratings .rating-wrap .rating{
  display: flex;
  align-items: center;
  margin-right: 32px;
}
.movie-details .specs .ratings .rating-wrap .rating img{
  height: 30px;
  flex-shrink: 0;
  margin-right: 6px;
}
.movie-details .specs h3{
  margin: 24px 0 6px;
  color: black;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
}
hr{
  background-color: #6667ab;
}
@media (max-width:1200px){
  .movie-details .poster{
    width: 300px;
    height: 450px;
    margin-right: 40px;
  }
}
@media (max-width: 992px) {
  .movie-details{
    display: block;
  }
  .movie-details .poster{
    margin-bottom: 40px;
  }
}
@media (max-width: 768px) {

  .movie-details .specs .title{
    font-size: 50px;
  }
 
  .movie-details .specs .ratings .rating-wrap{
    display: block;
  }
  .movie-details .specs .ratings .rating-wrap .rating{
    margin-top : 10px;
  }
}
</style>