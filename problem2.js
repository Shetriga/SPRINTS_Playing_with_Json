const { readFileSync, writeFileSync } = require("fs");
const moment = require("moment");

const data = JSON.parse(readFileSync("./problem2.json", { encoding: "utf-8" }));

data.accidents.forEach((acc) => {
  acc.date = moment(acc.data).format("YYYY-MM-DD");
});
console.log(data);

writeFileSync("./problem2_update.json", JSON.stringify(data), {
  encoding: "utf-8",
});
