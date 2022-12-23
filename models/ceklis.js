'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ceklis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       ceklis.hasMany(models.user, {
         as: "user",
         foreignKey: {
           name: "idUser",
         },
         
       });
      // define association here
    }
  };
  ceklis.init({
    name: DataTypes.STRING,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ceklis',
  });
  return ceklis;
};