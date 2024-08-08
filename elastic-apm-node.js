// elastic-apm-node.js
module.exports = {
  serviceName: "lazurde-sf",
  serverUrl:
    "http://apm-server-quickstart-apm-http.elastic-system.svc.cluster.local:8200", // E.g. https://my-deployment-name.apm.us-west2.gcp.elastic-cloud.com
  secretToken: "z5tz5xGbsm5D0K00i1t6E1p3",
  environment: process.env.NODE_ENV,
  captureBody: "errors",
  transactionSampleRate:
    process.env.NODE_ENV === "prod" || process.env.NODE_ENV === "production"
      ? 0.005
      : 1,
  logLevel: "trace",
};
