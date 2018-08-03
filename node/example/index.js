var invisible = function () {
  console.log("invisible");
}

var message = "hi";

function say() {
  console.log(message);
}
// 方法1：
// module.exports.say = say;
// module.exports.invisible = invisible;

// 方法2：
// exports.say = say;
// exports.invisible = invisible;

// 方法3：
module.exports = {
  say: say,
  invisible: invisible,
}