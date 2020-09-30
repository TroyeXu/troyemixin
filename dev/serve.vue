<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ServeDev',
})
</script>

<template>
  <div id="app">
    <h1 @click="test('/test')">link here</h1>
  </div>
</template>
