/** @format */

import Vue from "vue"
import { extend, ValidationProvider, ValidationObserver } from "vee-validate"
import { i18n } from "src/boot/i18n.js"

import { required, between, integer } from "vee-validate/dist/rules"

extend("required", {
  ...required,
  message: i18n.tc("form.__required")
})
extend("integer", {
  ...integer,
  message: i18n.tc("form.__integer")
})
extend("between", {
  ...between,
  message: (field, args) => {
    let min = args.min
    let max = args.max
    return i18n.t("form.__between", { max, min })
  }
})

extend("account", {
  validate(value) {
    const regex = /^(?=.*\d)(?=.*[A-Za-z])[a-zA-Z\d]{4,20}$/
    return regex.test(value)
  },
  //需要英文+数字组成4〜20码
  message: i18n.tc("form.__accountRegex")
})

//只能輸入中文或英文
extend("cnEn", {
  validate(value) {
    let regex = /[\u4E00-\u9FA5A-Za-z]/g
    return regex.test(value)
  },
  message: () => {
    return i18n.tc("form.__cnEn")
  }
})

extend("min", {
  validate(value, { length }) {
    // value 當前輸入值
    // length 傳入驗證數值
    return value.length >= length
  },
  params: ["length"], //配合messag-key
  message: (field, args) => {
    // filed當前輸入欄位
    // arg 傳入驗證數值
    let num = args.length
    return i18n.tc("form.__minLength", num, { num })
  }
})

extend("max", {
  validate(value, { length }) {
    return value.length <= length
  },
  params: ["length"],
  message: (field, args) => {
    let num = args.length
    return i18n.tc("form.__maxLength", num, { num })
  }
})
extend("email", {
  validate(value) {
    let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return regex.test(value)
  },
  message: i18n.tc("form.__emailTip")
})

// 英文數字
extend("enNum", {
  validate(value) {
    let regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]/
    return regex.test(value)
  },
  message: i18n.tc("form.__enAddNum")
})

// 空白
extend("space", {
  validate(value) {
    let regex = /^[^\s]*$/
    return regex.test(value)
  },
  message: i18n.tc("form.__notEmptySpace")
})

//必須數字
extend("numeric", {
  validate(value) {
    let regex = /^[0-9]*$/
    return regex.test(value)
  },
  message: i18n.tc("form.__numeric")
})

// 需要兩個不同
extend("twiceDiff", {
  validate(value, field) {
    return value !== field.diffValue
  },
  params: ["diffName", "diffValue"],
  message: (field, args) => {
    let diffField = i18n.tc(`form.__${args.diffName}.word`)
    let fieldName = i18n.tc(`form.__${field}.word`)
    return fieldName + i18n.tc("form.__twiceDiff", diffField, { diffField })
  }
})
// 需要兩個相同
extend("twiceSame", {
  validate(value, field) {
    return value == field.diffValue
  },
  params: ["diffName", "diffValue"],
  message: (field, args) => {
    let diffField = i18n.tc(`form.__${args.diffName}.word`)
    let fieldName = i18n.tc(`form.__${field}.word`)
    return fieldName + i18n.tc("form.__twiceSame", diffField, { diffField })
  }
})

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)
