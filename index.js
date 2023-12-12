const path = require("path");
const { IP2Location } = require("ip2location-nodejs");

const dbPath = path.join(__dirname, "IP2LOCATION-LITE-DB3.IPV6.BIN");

module.exports = {
  IP2Location,
  dbPath,
};
