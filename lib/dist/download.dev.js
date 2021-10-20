"use strict";

var _require = require("util"),
    promisify = _require.promisify;

module.exports.clone = function _callee(repo, desc) {
  var download, ora, process;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          download = promisify(require("download-git-repo"));
          ora = require("ora"); // 进度条

          process = ora("\u2708\u4E0B\u8F7D.......".concat(repo));
          _context.next = 5;
          return regeneratorRuntime.awrap(process.start());

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(download(repo, desc));

        case 7:
          process.succeed();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};