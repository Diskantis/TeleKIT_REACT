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
  state: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
});

const Department = sequelize.define("department", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

// const State = sequelize.define("state", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, unique: true, allowNull: false },
// });
//
// const Phone = sequelize.define("phone", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   number: { type: DataTypes.STRING, unique: true, allowNull: false },
// });

Department.hasMany(Recipient);
Recipient.belongsTo(Department);

// State.hasMany(Recipient);
// Recipient.belongsTo(State);
//
// Recipient.hasMany(Phone);
// Phone.belongsTo(Recipient);

module.exports = { User, Recipient };
