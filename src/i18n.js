/** @format */

import Vue from "vue"
import VueI18n from "vue-i18n"
import messages from "@src/i18n"

Vue.use(VueI18n)
const numberFormats = {
  "zh-hans": {
    // 一般數字
    currency: {
      style: "currency", //要使用的格式樣式,使用貨幣格式
      currency: "CNY", //貨幣格式化中使用的貨幣符號.
      useGrouping: true, //分隔符號,
      currencyDisplay: "symbol", //前面象徵符號
      minimumFractionDigits: 0 //小數幾位
    },
    // 有中文字
    moneyCurrency: {
      // style: "currency", //要使用的格式樣式,使用貨幣格式
      // currency: "CNY", //貨幣格式化中使用的貨幣符號.
      // currencyDisplay: "symbol", //前面象徵符號
      minimumFractionDigits: 0, //小數幾位
      notation: "compact"
    }
  },
  "en-us": {
    currency: {
      style: "currency", //要使用的格式樣式,使用貨幣格式
      currency: "USD", //貨幣格式化中使用的貨幣符號.
      useGrouping: true, //分隔符號,
      currencyDisplay: "symbol", //前面象徵符號
      minimumFractionDigits: 0 //小數幾位
    }
  },
  "zh-hant": {
    currency: {
      style: "currency", //要使用的格式樣式,使用貨幣格式
      currency: "TWD", //貨幣格式化中使用的貨幣符號.
      useGrouping: true, //分隔符號,
      currencyDisplay: "symbol", //前面象徵符號
      minimumFractionDigits: 0 //小數幾位
    }
  }
}
const i18n = new VueI18n({
  locale: "zh-hans",
  fallbackLocale: "en-us", //如果該翻譯沒詞彙預設英文
  messages,
  numberFormats
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
