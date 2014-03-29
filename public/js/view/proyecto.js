Class.View.Project = Backbone.View.extend({
	'events':{

	},
	initialize : function () {
		this.$el = $("#container_view");
		var self = this
		// this.template = _.template( $('#article-template').html() );
		this.template = swig.compile( $('#project_item').html() );
		//this.render();
	},
	
	render : function () {
		console.log("Entro");
		//var data = this.model.toJSON();

		var html = this.template({data:"MY DATA",image:"image", title:"titulo", tag:"tag"});

		this.$el.html( html );
	}
}); 