import knex from "knex";
import configuration from "../../knexfile";

let connection: knex<any, unknown[]> = null;
if (process.env.NODE_ENV === "PRODUCTION") {
  connection = knex(configuration.production);
} else {
  connection = knex(configuration.development);
}

export default connection;
