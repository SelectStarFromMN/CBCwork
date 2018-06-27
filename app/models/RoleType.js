/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RoleType', {
    roleTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    roleName: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'RoleType'
  });
};
