var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Layout = require('./components/Layout');
var PosterFrameSlider = require('./components/PosterFrameSlider');

var routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={PosterFrameSlider} />
	</Route>
);

exports.start = function() {
  
  Router.run(routes, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
