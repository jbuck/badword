var list = require("./list");

module.exports = function(str) {
  return list.some(function(badword) {
    return str == badword;
  });
};
