var superagent = require('superagent');
var later = require('later');

function autoSignIn () {
  superagent
    .post('http://chi.rossroma.com/addDinner')
    .set({
      'Accept': ' application/json, text/plain, */*',
      'X-Requested-With': 'XMLHttpRequest'
    })
    .send({ "userName": "杨凯", "type": 1, "count": 0.5, "others": "" })
    .end((error, response) => {
      if (error) {
        console.warn(error)
        return
      }
      console.log(response.data)
    })
}

var later = require('later');
later.date.UTC();  //设置本地时区
var sched = later.parse.recur().on(16).hour().on(30).minute(),
    t = later.setInterval("autoSignIn()", sched);