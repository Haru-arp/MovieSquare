<template>

  <div class="container p-5 my-4">
    <h1>Recommend Movie</h1>
    <!-- now api -->
    <h2>Now playing</h2>
    <br>
    <div class="movieitem d-flex justify-content-center">
      <NowPlayingList
        v-for="now in nows.slice(0,10)"
        :key="now.id"
        :now = "now.id"
        />
    </div>
    <!-- upcomming api -->
    <h2>Upcoming Movie</h2>
    <br>
    <div class="movieitem d-flex justify-content-center">
      <UpcomingMovieList
        v-for="upcoming in upcomings.slice(0,10)"
        :key="upcoming.id"
        :upcoming = "upcoming.id"
        />
    </div>
    <!-- Top Rated api -->
    <h2>Top Rated 10</h2>
    <br>
    <div class="movieitem d-flex justify-content-center">
      <RecommendMovieList
        v-for="movie in movies.slice(0,10)"
        :key="movie.id"
        :movie = "movie.id"
        />
    </div>
    <!-- Random Movie -->
    <h2>The movie related to what you searched</h2>
    <br>
    <div class="movieitem d-flex justify-content-center">
      <SearchedRandom 
        v-for="movie in randomMovie.slice(0,10)"
        :key="movie.id"
        :movie="movie"
        />
    </div>
  </div>




</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import SearchedRandom from '../components/SearchedRandomMovie.vue'
import NowPlayingList from '../components/NowPlayingList.vue'
import UpcomingMovieList from '../components/UpcomingMovieList.vue'
import RecommendMovieList from '../components/RecommendMovieList.vue'
export default {
  // TMDB get 요청 보내서, 데이터들 받은 다음에 가져와야될게 post_path, title, genre, movie_id
  name: 'RecommendMovie',
  components: {
    RecommendMovieList,
    UpcomingMovieList,
    NowPlayingList,
    SearchedRandom,
  },
  data() {
    return {
      movies: [],
      idlist: [],
      upcomings: [],
      nows: [],
      randomId: '',
      randomMovie :[],

    }
  },

  methods: {
    getrandomMovie(){
      const randomMovie = _.sample(this.$store.state.movie.searchMovies)
      if (randomMovie){const RANDOM_MOVIE_URL = `https://api.themoviedb.org/3/movie/${randomMovie.searchMovies.imdbID}?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR`
      axios.get(RANDOM_MOVIE_URL)
      .then ((res) => {
        this.randomId = res.data.id
      })}
      
    },
    getRandomMovieId(){
      const ra = this.randomId
      const MOVIEID_URL = `https://api.themoviedb.org/3/movie/${ra}/recommendations?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR&page=1`
      axios.get(MOVIEID_URL)
      .then((res) =>{
        
        this.randomMovie = res.data.results
      })
    },
    getMovies(){
      const MOVIE_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR&page=1" 
      axios.get(MOVIE_URL)
      .then((res) => {
        this.movies = res.data.results
      })
    },
    getUpcommingMovies(){
      const UPCOMING_MOVIE_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR&page=1"
      axios.get(UPCOMING_MOVIE_URL)
      .then((res) => {
        // console.log(res)
        this.upcomings = res.data.results
      })
    },
    getNowPlayingMovies(){
      const NowPlaying_MOVIE_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR&page=1&region=KR"
      axios.get(NowPlaying_MOVIE_URL)
      .then((res) => {
        // console.log(res)
        this.nows = res.data.results
      })
    },
  },
  mounted: function(){
    this.getMovies()
    this.getUpcommingMovies()
    this.getNowPlayingMovies()
    this.getrandomMovie()
    setTimeout(()=>{
      this.getRandomMovieId()
    },700)
    
  }
}
</script>

<style scoped>
.movieitem{
  flex-wrap: wrap;
}

.container h1{
  font-family: 'Oswald', sans-serif;
  color: #6667ab;
  margin-bottom: 50px;
  font-size: 48px;

}
.container h2{
  font-size: 30px;
  font-family: 'Oswald', sans-serif;
}

</style>