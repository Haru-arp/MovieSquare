<template>
  <div class="moviecard zoom">
    <router-link
    :to="`/movie/${randomtemp.imdb_id}`" 
    >
      <div class="card">
        <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        <div class="card-body">
          <h4 class="card-title">
            {{movie.title}} 
          </h4>
          <p class="card-text">
            {{movie.release_date}}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'randomMovieList',
  props: ['movie'],
  data(){
    return {
      randomtemp: {},
    }
  },
  methods:{
    getrandomMovieId(){
      const MOVIEID_URL = `https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR`
      axios.get(MOVIEID_URL)
      .then((res) =>{
        this.randomtemp = res.data
      })
    }
     
  },
  mounted(){
   this.getrandomMovieId()

  }
}
</script>

<style scoped>
.moviecard{
  width: 200px;
  height: 300px;
  margin: 10px;
  background-size: cover;
  margin-bottom: 150px;
}

h4{
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #6667ab;
  font-size: 14px;
}
a:hover{
  color: #6667ab;
}
img{
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 0;
}
.card-img-top{
  margin-top: 0;
}
.card{
  border: 2px solid #6667ab;
  border-radius: 10px;
  box-shadow: 0 2px 2px #6667ab;
}
.zoom{
  transition: transform .3s;
}
.zoom:hover{
  transform: scale(1.1);
}
</style>