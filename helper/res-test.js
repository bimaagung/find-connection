module.exports = res = {
  json: function (d) {
    this.dataValues = d
    return this
  },
  status: function (s) {
    this.statusCode = s
    return this
  },
}
