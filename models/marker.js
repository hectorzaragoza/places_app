'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.marker.belongsToMany(models.user, {through: 'userMarker'})
      models.marker.hasMany(models.comment)
    }
  };
  marker.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    review: DataTypes.TEXT,
    createdAt: {type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW},
    placeName: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10,8),
    long: DataTypes.DECIMAL(11,8)
  }, {
    sequelize,
    modelName: 'marker',
  });
  return marker;
};