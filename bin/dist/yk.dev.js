#!/usr/bin/env node
// console.log("欢迎使用YK菌的 cli 工具");
// console.log(process.argv);
"use strict";

var program = require("commander");

program.version(require("../package.json").version);
program.command("init <name>").description("init project").action(require("../lib/init"));
program.parse(process.argv);