/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Newsfeed', {
    newsfeedId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eventTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    newsItem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profileId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Profile',
        key: 'profileId'
      }
    }
  }, {
    tableName: 'Newsfeed'
  });
};
