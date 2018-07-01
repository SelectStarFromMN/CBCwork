/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SocialMediaType', {
    socialMediaTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    socialMediaName: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'SocialMediaType'
  });
};
