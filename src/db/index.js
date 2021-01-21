const { Sequelize, Datatype } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: env.process.PGHOST,
    dialect: "postgres",
  }
);
