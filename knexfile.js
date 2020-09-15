const config = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: "5432",
      database: "whatsapp",
      user: "postgres",
      password: "postgres",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};

module.exports = config;
