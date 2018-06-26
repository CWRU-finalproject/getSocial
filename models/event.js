module.exports = (sequelize, Sequelize) => {

	const event = sequelize.define("event", {
		title: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		discription: {
			type: Sequelize.TEXT,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		createdAt: {
			type: Sequelize.DATE, 
         	defaultValue: Sequelize.NOW
		},
		date: {
			type: Sequelize.DATE, 
			defaultValue: Sequelize.NOW
		}
	});

	event.associate = (models) => {
		event.belongsTo(models.users, {
			foreignKey: {
          		allowNull: false
       		}
		});
	};

	return event;

};