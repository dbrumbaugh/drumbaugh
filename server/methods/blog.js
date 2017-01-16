import {Posts} from '/lib/collections.js';
import {Random} from 'meteor/random';

Meteor.methods({
	createPost(title, body) {
		const _id = Random.id(); // mongo generates this if not given, but we want to return it for nav purposes
		Posts.insert({_id: _id, title: title, date: new Date(), body});
		return _id;
	}
});