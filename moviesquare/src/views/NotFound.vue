<template>
  <div class="not-found">
    <div class="status">
      404
    </div>
    <div class="message">
      Page Not Found!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.not-found{
  line-height: 1.2;
  text-align: center;
  font-family: "Oswald", sans-serif;
  padding: 80px 20px;
}
.not-found .status{
  font-size: 160px;
  color: #6667ab;
  font-weight: bold;
}
.not-found .message{
  font-size: 50px;
}
</style>