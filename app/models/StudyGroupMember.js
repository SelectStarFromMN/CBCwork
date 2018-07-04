/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyGroupMember', {
    studyGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'StudyGroup',
        key: 'studyGroupId'
      }
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'userName'
      }
    }
  }, {
    tableName: 'StudyGroupMember'
  });
};
