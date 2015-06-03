Adventure.Views.Hike = Backbone.View.extend({
	tagName: "div",
	className: "col-xs-6 col-md-4 hike",

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
		Adventure.vent.on('collectionSorted', this.collectionSorted, this);
	},

	render: function()
	{
		this.el.innerHTML = "";
		this.collection.each( this.addOne, this );
	},

	addOne: function(hike)
	{
		var tempHike = new Adventure.Views.Hike( {model: hike} );
		this.$el.append( tempHike.render().el );
	},

	collectionSorted: function()
	{
		this.collection = Adventure.Hiking.SortedCollection;
		this.render();
		this.$el.addClass('sorted');
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

		var sortType =  $(target).data('sort');

		switch (sortType)
		{
			case "alphabet-asc":
				this.sortAlphabet(true);
			break;
			case "alphabet-desc":
				this.sortAlphabet(false);
			break;
			case "length-asc":
				this.sortLength(true);
			break;
			case "length-desc":
				this.sortLength(false);
			break;
			case "time-asc":
				this.sortTime(true);
			break;
			case "time-desc":
				this.sortTime(false);
			break;
			
		}

	},

	sortAlphabet: function(asc)
	{
		var temp = Adventure.Hiking.OriginalCollection.toJSON();
		var sorted = _.sortBy(temp, 'name');
		if (!asc)
		{
			sorted = sorted.reverse();
		}
		Adventure.Hiking.SortedCollection = new Adventure.Collections.Hikes(sorted);
		Adventure.vent.trigger('collectionSorted');
	},

	sortLength: function(asc)
	{
		var temp = Adventure.Hiking.OriginalCollection.toJSON();
		var sorted = _.sortBy(temp, 'distance');
		if (!asc)
		{
			sorted = sorted.reverse();
		}
		Adventure.Hiking.SortedCollection = new Adventure.Collections.Hikes(sorted);
		Adventure.vent.trigger('collectionSorted');
	},

	sortTime: function(asc)
	{
		var temp = Adventure.Hiking.OriginalCollection.toJSON();
		var sorted = _.sortBy(temp, 'time');
		if (!asc)
		{
			sorted = sorted.reverse();
		}
		Adventure.Hiking.SortedCollection = new Adventure.Collections.Hikes(sorted);
		Adventure.vent.trigger('collectionSorted');
	},

	updateMileage: function(evt)
	{
		var length = $(evt.currentTarget).val();
		$("#hike-length").html( length + "mi" );
	}
});