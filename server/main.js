import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup

	Accounts.config({
		forbidClientAccountCreation: true
	});

	if (Meteor.users.find().count() === 0) {
		const user = {
			username: 'doug',
			email: 'dbrumbaugh@my.harrisburgu.edu',
			password: 'doug'
		}
		Accounts.createUser(user);
	}

});
