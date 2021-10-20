"use strict";

// 打印欢迎界面
var _require = require("util"),
    promisify = _require.promisify;

var figlet = promisify(require("figlet"));

var clear = require("clear");

var chalk = require("chalk");

var _require2 = require("./download"),
    clone = _require2.clone; // 封装一个输出绿色文字的API


var log = function log(content) {
  return console.log(chalk.green(content));
};

module.exports = function _callee(name) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 打印欢迎界面
          clear(); // const data = await figlet.textSync("YK! Welcome", {
          //   font: "Ghost",
          //   horizontalLayout: "default",
          //   verticalLayout: "default",
          //   width: 200,
          //   whitespaceBreak: true,
          // });
          // log(data);

          log("创建项目" + name); // 这里的git仓库可以自己指定

          _context.next = 4;
          return regeneratorRuntime.awrap(clone("github:yk2012/vue-template", name));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};