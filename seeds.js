
 var seeds = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.users.create({
		firstName: "John",
		lastName: "Doe",
	 	email: 'email@email.com',
	 	password: 'rootsss',
	 	major: "nursing",
	 	year: "junior"
	 })
	 queryInterface.sequelize.models.event.create({
	 	title: "Operation Party",
	 	discription: "We will play operation all night long",
	 	userId: 1		
	 })

}



module.exports = seeds;