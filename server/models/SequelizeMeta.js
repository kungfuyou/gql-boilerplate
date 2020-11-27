const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "name",
      unique: "name"
    }
  };
  const options = {
    tableName: "SequelizeMeta",
    comment: "",
    indexes: []
  };
  const SequelizeMetaModel = sequelize.define("sequelizeMetaModel", attributes, options);
  return SequelizeMetaModel;
};