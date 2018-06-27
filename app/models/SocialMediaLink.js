/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SocialMediaLink', {
    url: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    socialMediaTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'socialMediaType',
        key: 'socialMediaTypeId'
      }
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Profile',
        key: 'profileId'
      }
    }
  }, {
    tableName: 'SocialMediaLink'
  });
};
