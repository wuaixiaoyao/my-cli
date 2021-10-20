// 打印欢迎界面
const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const chalk = require("chalk");
const { clone } = require("./download");

// 封装一个输出绿色文字的API
const log = (content) => console.log(chalk.green(content));

module.exports = async (name) => {
  // 打印欢迎界面
  clear();

  // const data = await figlet.textSync("YK! Welcome", {
  //   font: "Ghost",
  //   horizontalLayout: "default",
  //   verticalLayout: "default",
  //   width: 200,
  //   whitespaceBreak: true,
  // });
  // log(data);

  log("创建项目" + name);
  // 这里的git仓库可以自己指定
  await clone("github:yk2012/vue-template", name);
}
