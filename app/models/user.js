/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.ENUM('F','M'),
      allowNull: true
    },
    avatar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cohortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Cohort',
        key: 'cohortId'
      }
    },
    roleTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'RoleType',
        key: 'roleTypeId'
      }
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};
