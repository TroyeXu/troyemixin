// Import vue component
import utilsMixins from '@/mixins.js'
/** @format */
const MyPlugin = null
MyPlugin.install = function(Vue, options) {
  Vue.mixin(utilsMixins)
}
export default { MyPlugin }
