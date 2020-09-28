export default {
  methods: {
    linkUrl(pathName) {
      this.$router
        .push({
          path: pathName,
        })
        .catch((err) => {
          err
        })
    },
    test() {
      console.log('this', this)
    },
  },
}
