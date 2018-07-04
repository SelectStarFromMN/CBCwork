/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Skill', {
    skillId: {
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
        model: 'user',
        key: 'userName'
      }
    }
  }, {
    tableName: 'Skill'
  });
};
