'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ceklisItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
      // define association here
    }
  };
  ceklisItem.init({
    name: DataTypes.STRING,
    idCeklis: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ceklisItem',
  });
  return ceklisItem;
};