import utilsMixins from '@/mixins.js'

const MyPlugin = function(Vue, options) {
  Vue.mixin(utilsMixins)
}
export default { MyPlugin }
