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
			Session.set("postid", FlowRouter.getParam('postId'));
			return Posts.findOne({_id: FlowRouter.getParam('postId')});
		}
	},

	displayEdit() {
		var user = Meteor.userId();

		if (FlowRouter.getRouteName() === 'blogCreate'){
			//We are in the Create Post window, and so we don't need the 
			//edit/delete buttons to appear on screen.
			return false;
		}
		else
		{
			if (Meteor.user())
			{
				//We are logged in, and therefore have access to
				//the buttons. Further, we are not in the create
				//post window. So display them
				return true;
			}
		}

		//We are not logged in, so do no display edit/delete buttons
		return false;
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
});

// enables live post preview
Template.blogCreate.events({
	'keyup input#title'(event) {
		var preview = Session.get('preview') || {title: '', date: new Date(), body: ''};
		preview.title = event.target.value;
		Session.set('preview', preview);
	},

	'keyup input#tags'(event) {
		var preview = Session.get('preview') || {title: '', date: new Date(), body: ''};
		preview.tag = event.target.value;
		Session.set('preview', preview);
	},

	'keyup textarea#body'(event) {
		var preview = Session.get('preview') || {title: '', date: new Date(), body: ''};
		preview.body = event.target.value;
		Session.set('preview', preview);
	},
	'click button#submit'(event) {
		var post = Session.get('preview');
		console.log(post.tag);
		Meteor.call('createPost', post.title, post.body, post.tag, function(err, res){
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

Template.blogPost.events({
	'click button#delete'(event) {
		
		var post_id = Session.get('postid');
		Meteor.call('deletePost', post_id, function(err, res){
			if (!err && res) {
				alert("Post deleted!");
				FlowRouter.go('home');
			}
		});
	},

	'click button#edit'(event) {
	}

});
