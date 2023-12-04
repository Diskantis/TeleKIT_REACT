const sequelize = require("../db");
const { DataTypes } = require("sequelize");

// Пользователи приложения
const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  sur_name: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

// Получатель оборудования
const Recipient = sequelize.define("recipient", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  last_name: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  sur_name: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
  department: { type: DataTypes.STRING },
  state: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
});

module.exports = { User, Recipient };
