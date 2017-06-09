#!/usr/bin/env node

var NodeDeployment = require("codedeploy-scripts").NodeDeployment;

var deployment = new NodeDeployment({
    appName: "react-demo-web",
    nodePort: "5020",
    serverScript: "build/server/index.js",
    secretBucket: "tqc-encrypted"
});

deployment.run();
