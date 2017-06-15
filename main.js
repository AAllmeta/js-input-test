var input = require('prompt');

input.start()

input.get(['value'], function (err, result) {

  console.log(even(result.value))

  function even(a) {
    if(a % 2 == 0) {
      return true
    }
    else if(a % 2 > 0){
      return false
    }
    else {
      return "invalid"
    }
  }

})
