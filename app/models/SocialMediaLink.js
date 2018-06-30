/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SocialMediaLink', {
    socialMediaTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'socialMediaType',
        key: 'socialMediaTypeId'
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
    },
    url: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    tableName: 'SocialMediaLink'
  });
};
