/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyGroup', {
    studyGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    studyGroupName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    scheduleJSON: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'StudyGroup'
  });
};
