const DataTypes = require("sequelize");
const Sequelize = require("../util/Databaseconnection");

const messagetable = Sequelize.define("chattable", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: {
    type: DataTypes.TEXT({ length: "medium" }),
    collate: "utf8mb4_unicode_ci",
  },
});

module.exports = messagetable;
