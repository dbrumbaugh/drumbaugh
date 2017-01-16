import {Posts} from '/lib/collections.js';

// helpers for blog page (list of posts)
Template.blogPage.helpers({
	posts() {
		return Posts.find({}, {sort: {date: -1}}).fetch();
	}
});

// helpers for blog post page (individual post)
Template.blogPost.helpers({
	post() {
		// if on post create page, load preview obj instead
		if (FlowRouter.getRouteName() === 'blogCreate') {
			return Session.get('preview');
		} else {
			return Posts.findOne({_id: FlowRouter.getParam('postId')});
		}
	}
});

// helpers for adding a post 
Template.blogCreate.helpers({
	preview() {
		return Session.get('preview');
	},
	disableSubmit() {
		try {
			return Session.get('preview').title && Session.get('preview').body ? null : "disabled";
		} catch (TypeError) {
			return "disabled";
		}
	}
})

// enables live post preview
Template.blogCreate.events({
	'keyup input#title'(event) {
		var preview = Session.get('preview') || {title: '', date: new Date(), body: ''};
		preview.title = event.target.value;
		Session.set('preview', preview);
	},
	'keyup textarea#body'(event) {
		var preview = Session.get('preview') || {title: '', date: new Date(), body: ''};
		preview.body = event.target.value;
		Session.set('preview', preview);
	},
	'click button#submit'(event) {
		var post = Session.get('preview');
		Meteor.call('createPost', post.title, post.body, function(err, res){
			if (!err && res) {
				alert("Post created!");
				FlowRouter.go('blogPost', {postId: res});
			}
		});
	},
	'click button#saveDraft'(event) {

	},
	'click button#cancel'(event) {
		Session.set('preview', null);
		FlowRouter.go('home');
	}
});