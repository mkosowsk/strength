const { db } = require('./database.js');

const seedUsers = () => db.Promise.map(
	[
		{
			username: 'mitch',
		},
		{
			username: 'russ',
		}
	], user => db.model('users').create(user))

db.sync()
	.then(() => db.sync({
		force: true
	}))
	.then(seedUsers)
	.then((users) => console.log(`Seeded ${users.length} users OK`))
	.catch(error => console.error(error))
	.finally(() => db.close())