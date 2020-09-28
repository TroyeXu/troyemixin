<script>
import Vue from 'vue'

import mixins from '../dist/mylib.common'
export default Vue.extend({
  mixins: [mixins],
  name: 'ServeDev',
})
</script>

<template>
  <div id="app">
    <h1 @click="test('/test')">link here</h1>
  </div>
</template>
