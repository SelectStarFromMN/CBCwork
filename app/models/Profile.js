/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Profile', {
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT('medium'),
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cohortId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Cohort',
        key: 'cohortId'
      }
    },
    roleTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'RoleType',
        key: 'roleTypeId'
      }
    }
  }, {
    tableName: 'Profile'
  });
};