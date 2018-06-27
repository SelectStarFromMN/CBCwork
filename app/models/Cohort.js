/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cohort', {
    cohortId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cohortName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    bootcampId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Bootcamp',
        key: 'bootcampId'
      }
    }
  }, {
    tableName: 'Cohort'
  });
};
