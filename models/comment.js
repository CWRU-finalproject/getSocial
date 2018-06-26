module.exports = (sequelize, Sequelize) => {

	const comment = sequelize.define("comment", {
		text: {
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
		user: {
			type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
      			len: [1]
			}
		}
	});

	comment.associate = (models) => {
		comment.belongsTo(models.event, {
			foreignKey: {
          		allowNull: false
       		}
		});
	};

	return comment;

}