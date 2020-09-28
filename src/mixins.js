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
  },
}
