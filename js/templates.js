_.templateSettings.interpolate = /\{\{(.*?)\}\}/;

var Templates = {};

Templates.Hike = [
		'<a href="#" class="thumbnail">',
		'<img src="" alt="">',
		'<div class="details text-center">',
			'<span>{{ distance }}mi</span> | <span class="glyphicon glyphicon-stats" aria-hidden="true"></span> {{ elevation_end - elevation_start }}ft | <span class="glyphicon glyphicon-time" aria-hidden="true"></span> 45min',
		'</div>',
		'</a>',
		// '<p>{{ trailhead }}</p>',
		'<h4 class="text-center">{{ name }}</h4>',
].join("");

for (template in Templates)
{
	if (Templates.hasOwnProperty(template) )
	{
		Templates[template] = _.template(Templates[template]);
	}
}