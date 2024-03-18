import env from "env-var";

const config = {
  token: env.get("TOKEN").required().asInt,
  host: env.get("DB_HOST").required().asString,
  port: env.get("DB_PORT").required().asInt,
  url: env.get("GOGLE_URL").required().asUrlString,
  user: env.get("DB_USER").required().asString,
  pass: env.get("DB_PASS").required().asString,
  roles: env.get("ROLES").required().asArray,
  jsonConfig: env.get("JSON_CONFIG").required().asJson,
};

export default config;
