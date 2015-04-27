Adventure.Views.Hike = Backbone.View.extend({
	tagName: "div",
	className: "col-xs-6 col-md-3",

	template: Templates.Hike,

	initialize: function()
	{
		this.render();
	},

	render: function()
	{
		this.el.innerHTML = this.template( this.model.toJSON() );
		return this;
	}
});

Adventure.Views.Hikes = Backbone.View.extend({
	el: "#hikes-container",

	initialize: function()
	{

	},

	render: function()
	{
		this.collection.each( this.addOne, this );
	},

	addOne: function(hike)
	{
		var tempHike = new Adventure.Views.Hike( {model: hike} );
		this.$el.append( tempHike.render().el );
	}
});


Adventure.Views.HikesFilter = Backbone.View.extend({
	el: ".hikes-filter",

	events: {
		'click button': 'sort',
		'input input[type="range"]': 'updateMileage'
	},

	initialize: function()
	{

	},

	render: function()
	{

	},

	sort: function(evt)
	{
		var target = evt.currentTarget;
		$(target).parent().find('button').removeClass('selected');
		$(target).addClass('selected');
	},

	updateMileage: function(evt)
	{
		var length = $(evt.currentTarget).val();
		$("#hike-length").html( length + "mi" );
	}
});