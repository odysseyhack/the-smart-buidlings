export default {
  getCurrent () {
    return 15;
  },

  toMonth (period) {
    return "Jan"
  },

  toYear (period) {
    return 2019
  },

  toString (period) {
    return this.toMonth(period) + " " + this.toYear(period)
  }
}