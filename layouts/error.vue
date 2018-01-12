<template>
  <div>
    <h1 v-if="error.statusCode === 404">Sorry, that page could not be found</h1>
    <h1 v-else>An error occurred</h1>
    <p>Would you like to return to the <nuxt-link to="/">home</nuxt-link> page</p>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
  div {
    text-align: center;
    margin: 3em 0;
  }
</style>
