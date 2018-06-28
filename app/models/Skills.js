/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Skills', {
    skillsId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Profile',
        key: 'profileId'
      }
    },
    skillsArray: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'Skills'
  });
};
