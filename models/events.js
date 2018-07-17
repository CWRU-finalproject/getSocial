module.exports = (sequelize, Sequelize) => {

	const events = sequelize.define("events", {
		title: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		location: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		description: {
			type: Sequelize.TEXT,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		},
		date: {
			type: Sequelize.DATEONLY,
			allowNull: true
		},
		active: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
		filter : {
			type: Sequelize.STRING,
			allowNull: true,
			validate: {
				len: [1]
			}
		},
		attendees: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		}
	});

	events.associate = function(models) {
		events.belongsTo(models.users, {
			foreignKey: {
          		allowNull: false
       		}
		});
	};

	return events;

};