module.exports = (sequelize, Sequelize) => {

	const users = sequelize.define("users", {
		firstName: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		lastName: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		email: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		password: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [6]
			}
		},
		major: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		year: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		}
	});


	users.associate = function(models) {
    	users.hasOne(models.event, {
     		onDelete: 'CASCADE'

    	});
  };

	return users;

};