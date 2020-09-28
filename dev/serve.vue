<script>
import Vue from 'vue'

import mixins from '../src/mixins'
export default Vue.extend({
  mixins: [mixins],
  name: 'ServeDev',
})
</script>

<template>
  <div id="app">
    <h1 @click="linkUrl('/test')">link here</h1>
  </div>
</template>
