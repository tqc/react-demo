import path from "path";
import chai from "chai";
import envloader from "envloader";

envloader.load(path.resolve(__dirname, ".."));

global.expect = chai.expect;

before(function(done) {
    console.log("set up test run");
    done();
});

after(function(done) {
    console.log("end test run");
    done();
});