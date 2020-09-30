/** @format */

import Vue from "vue"
import swal from "sweetalert2"
import { i18n } from "./i18n.js"
const swalPlugn = {}
swalPlugn.install = function(Vue) {
  const toast = swal.mixin({
    customClass: "log_box",
    showCloseButton: true,
    allowOutsideClick: false,
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: i18n.tc("global.__ok"),
    cancelButtonText: i18n.tc("global.__cancel"),
    icon: "error",
    type: "warning",
    heightAuto: false //關閉彈出回到最上方
  })
  const toast2 = swal.mixin({
    customClass: "log_box",
    timer: 2000,
    allowOutsideClick: false,
    showConfirmButton: false,
    title: i18n.tc("global.__notice"),
    type: "warning",
    heightAuto: false //關閉彈出回到最上方
  })
  Vue.prototype.$swal = toast
  Vue.prototype.$swal2 = toast2
}
Vue.use(swalPlugn)
