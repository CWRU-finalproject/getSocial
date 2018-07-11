
 var seeds = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.users.create({
		firstName: "John",
		lastName: "Doe",
	 	email: 'email@email.com',
	 	password: 'rootsss',
	 	major: "nursing",
	 	year: "junior"
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Party",
	 	description: "We will play operation all night long",
	 	location: "my house",
	 	date: "2018-12-12",
	 	filter: "Recreation",
	 	userId: 1		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Study",
	 	description: "We will STUDY all night long",
	 	location: "my STUDY house",
	 	date: "2018-12-12",
	 	filter: "Study",
	 	userId: 1		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Meal",
	 	description: "We will MEAL all night long",
	 	location: "my MEAL house",
	 	date: "2018-12-12",
	 	filter: "Meal",
	 	userId: 1		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Misc",
	 	description: "We will MISC all night long",
	 	location: "my MISC house",
	 	date: "2018-12-12",
	 	filter: "Misc",
	 	userId: 1		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation CLUB EVENT",
	 	description: "We will CLUB EVENT all night long",
	 	location: "my CLUB EVENT house",
	 	date: "2018-12-12",
	 	filter: "Club Event",
	 	userId: 1		
	 })

}



module.exports = seeds;