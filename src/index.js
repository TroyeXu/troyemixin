// Import vue component
import utilsMixins from '@/mixins.js'
/** @format */

const install = function(Vue, options) {
  // 1.  inject some component options
  Vue.mixin(utilsMixins)
}
export default { install }
