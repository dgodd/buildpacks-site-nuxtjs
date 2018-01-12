<template>
  <Index>
    <DependenciesIndex :buildpacks="buildpacks" :primaryDeps="primaryDeps" />
  </Index>
</template>

<script>
import Index from '@/components/Index'
import DependenciesIndex from '@/components/DependenciesIndex'
import primaryDeps from '@/components/primary_deps'
import axios from 'axios'

export default {
  components: {
    Index,
    DependenciesIndex
  },
  async asyncData ({ params }) {
    let { data } = await axios.get('https://buildpacks-site.s3.amazonaws.com/buildpacks.json')
    return { buildpacks: data, primaryDeps }
  }
}
</script>
