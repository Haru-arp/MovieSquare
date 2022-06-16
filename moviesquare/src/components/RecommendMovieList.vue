<template>
    <router-link
    :to="`/movie/${movietemp.imdb_id}`" 
    class="moviecard zoom">
      <div class="card">
        <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/' + movietemp.poster_path">
        <div class="card-body">
          <h4 class="card-title">
            {{movietemp.title}} 
          </h4>
          <p class="card-text">
            {{movietemp.release_date}}
          </p>
        </div>
      </div>
    </router-link>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RecommendMovieList',
  props: ['movie'],
  data(){
    return {
      movietemp: {},
     
    }
  },
  methods:{
     getMovieId(){
      const MOVIEID_URL = `https://api.themoviedb.org/3/movie/${this.movie}?api_key=d7ce0ca6196a14ee5e3eab47f84bbba5&language=ko-KR`
      axios.get(MOVIEID_URL)
      .then((res) =>{
        // console.log(res.data)
        this.movietemp = res.data
      })
    }
  },
  mounted(){
    this.getMovieId()
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