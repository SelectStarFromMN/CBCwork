
/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Room', {
      RoomId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name1: {
        type: DataTypes.STRING(45),default:"", required:true,
        allowNull: false
      },
      name2: {
        type: DataTypes.STRING(45),default:"",required:true,
        allowNull: false
      },
      numbers:{type:DataTypes.INTEGER},
      lastActive:{type:DataTypes.DATE,default:sequelize.fn('NOW')},
      createdOn:{type:DataTypes.DATE,default:sequelize.fn('NOW')}

    }, {
      tableName: 'Room'});

  };

  
  