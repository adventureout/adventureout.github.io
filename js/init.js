var Adventure =Adventure || {
	Models: {},
	Collections: {},
	Views: {}
};


var Routes = Backbone.Router.extend({

  routes: {
    "climbing":               "climbing",    // #climbing
    "camping":                "camping",    // #camping
    "hikes":                  "hikes",    // #hikes
    "hikes/:sort/:order":     "hikes",    // #hikes
  },

  climbing: function() {
    console.log("Oh hello!");
  },
  camping: function() {
    
  },
  hikes: function() {
    
  },
  climbing: function() {
    
  },

  hikes: function(sort, order) {
    console.log('Sort' + sort + ' Order' + order);
  }

});