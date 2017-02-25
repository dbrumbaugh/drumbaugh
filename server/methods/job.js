import {Portfolio} from '/lib/collections.js';

Meteor.methods({
	createPortfolioEntry(name, start_dt, stop_dt, loc, company, desc) {
		Portfolio.insert({position:name, start:start_dt, stop:stop_dt, 
						  place:loc, company:company, description:desc});
	},

	deletePortfolioEntry(id) {
		Portfolio.remove(id);
	}
/*
	updatePortfolioEntry(id, field, value) {
		switch (field)
		{
			case 'position': Portfolio.update(id)
			case 'start':
			case 'stop':
			case 'place':
			case 'company':
			case 'description':
		}
	}*/
});
