
 var seeds = function(queryInterface, Sequelize) {


	 queryInterface.sequelize.models.users.create({
		firstName: "John",
		lastName: "Doe",
	 	email: 'email@email.com',
	 	password: 'rootsss',
	 	major: "nursing",
	 	year: "junior"
	 })
	 queryInterface.sequelize.models.users.create({
		firstName: "Jane",
		lastName: "Doe",
	 	email: 'howSheDoe@email.com',
	 	password: 'bootsss',
	 	major: "Rock and Roll",
	 	year: "6th year Sophomore"
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Party",
	 	description: "We will play operation all night long",
	 	location: "my house",
	 	date: "2018-12-9",
	 	filter: "Recreation",
	 	userId: 2,
	 	attendees: 4		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Study",
	 	description: "We will STUDY all night long",
	 	location: "my STUDY house",
	 	date: "2018-12-11",
	 	filter: "Study",
	 	userId: 1,
	 	attendees: 6		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Meal",
	 	description: "We will MEAL all night long",
	 	location: "my MEAL house",
	 	date: "2018-1-12",
	 	filter: "Meal",
	 	userId: 2,
	 	attendees: 1		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation Misc",
	 	description: "We will MISC all night long",
	 	location: "my MISC house",
	 	date: "2018-6-13",
	 	filter: "Misc",
	 	userId: 1,
	 	attendees: 4,
	 	active: 2 		
	 })
	 queryInterface.sequelize.models.events.create({
	 	title: "Operation CLUB EVENT",
	 	description: "We will CLUB EVENT all night long",
	 	location: "my CLUB EVENT house",
	 	date: "2018-8-21",
	 	filter: "Club Event",
	 	userId: 2,
	 	attendees: 19		
	 })

}



module.exports = seeds;