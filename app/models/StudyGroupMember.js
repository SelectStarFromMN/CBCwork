/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StudyGroupMember', {
    StudyGroupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'StudyGroup',
        key: 'StudyGroupId'
      }
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Profile',
        key: 'userName'
      }
    }
  }, {
    tableName: 'StudyGroupMember'
  });
};
