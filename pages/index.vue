<template>
  <Index>
    <BuildpackIndex :buildpacks="buildpacks" />
  </Index>
</template>

<script>
import Index from '@/components/Index'
import BuildpackIndex from '@/components/BuildpackIndex'
import axios from 'axios'

export default {
  components: {
    Index,
    BuildpackIndex
  },
  async asyncData ({ params }) {
    let { data } = await axios.get('https://buildpacks-site.s3.amazonaws.com/buildpacks.json')
    return { buildpacks: data }
  }
}
</script>
