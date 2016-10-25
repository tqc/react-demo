#!/usr/bin/env node

var SimpleDeployment = require("codedeploy-scripts").SimpleDeployment;

var deployment = new SimpleDeployment({
    appName: "react-demo-web",
    nodePort: "5020",
    serverScript: "build/server/index.js",
    domains: "react-demo.tqclarkson.com",
    buildFolder: "build/static",
    secretBucket: "tqc-encrypted",
    useSSL: false
});

deployment.run();
