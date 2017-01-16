FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("layout", {content: "notFound"});
    }
};

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render("layout", {content: "home"});
	}
});

FlowRouter.route('/portfolio/', {
    name: 'portfolio',
    action: function(params) {
        BlazeLayout.render("layout", {content: "portfolio"});
    }
});

FlowRouter.route('/blog/', {
    name: 'blogPage',
    action: function(params) {
        BlazeLayout.render("layout", {content: "blogPage"});
    }
});

FlowRouter.route('/blog/create', {
    name: 'blogCreate',
    action: function(params) {
        BlazeLayout.render("layout", {content: "blogCreate"});
    }
});

FlowRouter.route('/blog/:postId', {
    name: 'blogPost',
    action: function(params) {
        BlazeLayout.render("layout", {content: "blogPost"});
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action: function(params) {
        BlazeLayout.render("layout", {content: "admin"});
    }
});