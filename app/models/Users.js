module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Users', {
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
		type: DataTypes.TEXT('medium'),
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
	  tableName: 'Users'
	});
  };

/*
module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.STRING},
		about : {type:Sequelize.TEXT},
		avatar:{type:Sequelize.TEXT('meduim')},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		password : {type: Sequelize.STRING,allowNull: false }, 
		last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

	});

	return User;

}
*/
