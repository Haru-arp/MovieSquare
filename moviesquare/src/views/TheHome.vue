<template>
  <div>
    <TheHeadline />
    <TheSearch />
    <MovieList />
  </div>
</template>

<script>
import TheHeadline from '../components/TheHeadline.vue'
import TheSearch from '../components/TheSearch.vue'
import MovieList from '../components/MovieList.vue'
export default {
  components: {
    TheHeadline,
    TheSearch,
    MovieList,
  }
}
</script>

<style>

</style>