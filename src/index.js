// Import vue component
import utilsMixins from '@/mixins.js'
/** @format */

const install = function(Vue, options) {
  Vue.mixin(utilsMixins)
}
export default { install }
