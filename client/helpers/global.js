import marked from 'marked';

Template.registerHelper('markdownify', function(body){
	return marked(body);
});