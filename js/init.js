var Adventure =Adventure || {
	Models: {},
	Collections: {},
	Views: {},
	Hiking: {}
};

	var Routes = Backbone.Router.extend({

	  routes: {
	    "climbing":               "climbing",    // #climbing
	    "camping":                "camping",    // #camping
	    "hikes":                  "hikes"    // #hikes
	  },

	  climbing: function() {
	    console.log("Oh hello!");
	  },
	  camping: function() {
	    
	  },
	  hikes: function() {
	    console.log("Oh hello!");
	  }

	});

