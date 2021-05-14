<template>
  <Layout :menu="routes" />
</template>

<script>
import Layout from 'packages/w-layout'
import { routes } from '@/router'
export default {
  components: {
    Layout
  },
  data() {
    return {
      routes
    }
  }
}
</script>