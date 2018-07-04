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
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'user',
        key: 'userName'
      }
    }
  }, {
    tableName: 'Newsfeed'
  });
};
