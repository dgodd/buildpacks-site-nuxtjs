<template>
  <div id="app" class="min-vh-100" :class="pageClass">
    <SiteHeader></SiteHeader>
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'

export default {
  name: 'app',
  components: {
    SiteHeader
  },
  computed: {
    pageClass: function () {
      // FIXME
      // return this.$route.meta.pageClass
      return 'bg-near-white'
    }
  }
}
</script>

<style>
@import url(//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
@import url(//fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto+Mono|Roboto:400,500);

body, html {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
}

.condensed {
  font-family: 'Roboto Condensed';
}

.monospace {
  font-family: 'Roboto Mono';
}

hr {
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

.cf-blue {
  color: #0c9ed5;
}

.bg-cf-blue {
  background-color: #0c9ed5;
}

.drop-shadow {
  box-shadow: 0 2px 4px rgba(50,50,93,.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
