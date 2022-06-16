<template>
  <router-link 
    :to="`/movie/${movie.imdbID}`"
    :style ="{ backgroundImage: `url(${movie.Poster})`}"
    class="movie zoom">
    <TheLoader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </router-link>
</template>

<script>
import TheLoader from './TheLoader.vue'
export default {
  components: {
    TheLoader
  },
  props: {
     movie:{
       type: Object,
      default: function() { return {} }
    }
  },
  data() {
     return {
       imageLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const poster = this.movie.Poster
      if(!poster || poster ==='N/A'){
        this.imageLoading = false
      } else{
        await this.$loadImage(poster)
        this.imageLoading = false
      }
    }
  }
}
</script>

<style scoped>
.movie {
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 5px;
  background-color: gray;
  background-size: cover;
  overflow: hidden;
  position: relative;
}
.movie:hover::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 6px solid #8284e0;
}
.movie .info{
  background-color: rgba(50, 50, 50, 0.3);
  width: 100%;
  padding: 14px;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
}
.movie .year{
  color: #eacdff;
}
.movie .title{
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
.zoom{
  transition: transform .3s;
}
.zoom:hover{
  transform: scale(1.1);
}
</style>