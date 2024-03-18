import config from "./config.js";

const keys = [
  "token",
  "host",
  "port",
  "url",
  "user",
  "pass",
  "roles",
  "jsonConfig",
];

keys.forEach((key) => {
  console.log(config[key]());
});
