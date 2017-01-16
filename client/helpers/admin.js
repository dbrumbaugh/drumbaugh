Template.admin.helpers({
	disableChangePass() {
		var oldPass = Session.get('oldPass');
		var newPass = Session.get('newPass');
		var newPassRepeat = Session.get('newPassRepeat');
		return (oldPass && newPass && newPassRepeat) && (newPass === newPassRepeat) ? null : "disabled";
	}
});

Template.admin.events({
	'click button#login'() {
		var user = document.getElementById('username').value;
		var pass = document.getElementById('password').value;
		Meteor.loginWithPassword(user, pass);
	},
	'keyup input#currentPassword'(event) {
		Session.set('oldPass', event.target.value);
	},
	'keyup input#newPassword'(event) {
		Session.set('newPass', event.target.value);
	},
	'keyup input#newPasswordRepeat'(event) {
		Session.set('newPassRepeat', event.target.value);
	},
	'click button#changePassword'() {
		Meteor.call('changePassword', Session.get('oldPass'), Session.get('newPass'), function(err, res) {
			if (!err) {
				Session.set('newPass', null);
				Session.set('newPassRepeat', null);
				alert("Password successfully changed!");
				document.getElementById('currentPassword').value = null;
				document.getElementById('newPassword').value = null;
				document.getElementById('newPasswordRepeat').value = null;
			} else {
				alert(err);
			}
		});
	},
	'click button#logout'() {
		Meteor.logout();
	},
	'click button#logoutAll'() {
		Meteor.logoutOtherClients();
		alert('All clients logged into your account have been logged out.');
	}
});