var badword = require("./index"),
    specify = require("specify");

specify("sanity test", function(assert) {
  assert.equal(badword("asshole"), true, "asshole isn't a bad word");
  assert.equal(badword("ross"), false, "ross is a bad word");
});

specify.run();
