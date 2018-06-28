/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bootcamp', {
    bootcampId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    programName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'Bootcamp'
  });
};
