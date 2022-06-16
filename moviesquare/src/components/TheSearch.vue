<template>
  <div class="container">
    <input 
      v-model="title"
      class="form-control"
      type="text"
      placeholder="search for Movies..."
      @keyup.enter="apply">
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option 
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-default"
      @click="apply">
      Apply
    </button>
  </div>
</template>

<script>

export default {
  data(){
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
          {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (()=> {
            const years = []
            const thisYear = new Date().getFullYear()//2022
            for(let i = thisYear; i >= 1985; i-=1){
              years.push(i)
            }
            return years
          }) ()
        },
      ]
    }
  },
  methods: {
    async apply(){
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year,
      })
  },
}
}
</script>

<style scoped>
.container {
  display: flex;
}
.container >* {
  margin-right: 10px;
  font-size: 15px;
}
.container >* :last-child{
  margin-right: 0;
}
.container .selects {
  display: flex;
}
.container .selects select{
  width: 120px;
  margin-right: 10px;
}
.container .selects select:last-child{
  margin-right: 0;
}
.btn{
  width: 120px;
  height: 50px;
  font-weight: 700;
  flex-shrink: 0;
}
.container button{
  background-color: #6667ab;
  color: #fff;
}
.container button:active {
  color: #fff;
}
.container button:hover{
  color: #fff;
}
 
.container input:focus{
  box-shadow: 0 2px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}

.container select:focus{
  box-shadow: 0 1px 8px rgba(102, 103, 171, 0.6);
  border-color: #6667ab;
}

@media (max-width: 992px) {
  .container{
    display: block;
  }
  .container input{
    margin-right: 0;
    margin-bottom: 10px;
  }
  .container .selects{
    margin-right: 0;
    margin-bottom: 10px;
  }
  .container .selects select{
    width: 100%;
  }
  .container .btn {
    width: 100%;
  }
}

</style>