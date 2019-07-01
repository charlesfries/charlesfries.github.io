import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
	setupController() {
		particlesJS.load('particles', 'particles.json');
		$.getJSON('/particles.json', function(res) {
			console.log(res);
		});
	}
});
