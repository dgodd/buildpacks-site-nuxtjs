<template>
  <BuildpackDetail :buildpack="buildpack" :version="version" />
</template>

<script>
import BuildpackDetail from '@/components/BuildpackDetail'
import axios from 'axios'

export default {
  components: {
    BuildpackDetail
  },
  async asyncData ({ params: { id, version } }) {
    let { data } = await axios.get('https://buildpacks-site.s3.amazonaws.com/buildpacks.json')
    let buildpack = data.find(b => b.id === id)
    return { buildpack, version }
  }
}
</script>
