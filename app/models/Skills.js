/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Skills', {
    skillsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    skillsArray: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'Users',
        key: 'userName'
      }
    }
  }, {
    tableName: 'Skills'
  });
};
