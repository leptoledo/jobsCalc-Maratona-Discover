let data = {
  name: "Leandro Toledo",
  avatar: "https://avatars.githubusercontent.com/u/73507636?v=4",
  "monthly-budget": 3000,
  "days-per-day": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4,
  "value-hour": 75
};

module.exports = {
  get() {
    return data;
  },
  update(newData){
    data = newData;
  }
}