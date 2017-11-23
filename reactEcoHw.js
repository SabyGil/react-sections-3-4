var getProfilePic = function (username) {
	return 'link' + username
}

var getProfileLink = function (username) {
	return 'link' + username
}

var getProfileLink = function (username) {
	return 'link' + username
}

var getAvatarInfo = function (username) {
	return{
		pic: getProfilePic(username),
		link: getProfileLink(username)
	}
}

getAvatarInfo('tylermcginis')

//<--sideByside--->^^
var ProfilePic = function () {
	return (
		<img src={'link' + this.props.username'} />
	)
}

var ProfileLink = function () {
	return (
		<a href={'link' + this.props.username}>
			{this.props.username}
		</a>
	)
}

var Avatar = function () {
	return (
		<div>
			<ProfilePic username={this.props.username} />
			<ProfileLink username={this.props.username} />
		</div>
	)
}

<Avatar username='tylermcginis' />

//<------->
imperative jquery code

$('tylers-btn').click(function() {
	$(this).toggleClass('highlight')
	$(this).text() === 'add highlight'
		? $(this).text('remove highlight')
		: $(this).text('add highlight')
})

//<--sideByside--->^^

declarative react code

<TylersBtn 
	onClick={this.handleToggleHighlight}
	highlight={this.state.highlight}
/>
//<--sideByside--->^^

this.setState({
	highlight: !this.state.highlight
})

//<------->
Explicit Mutations 
	
	this.setState({ 
		highlight: !this.state.highlight,
	}) //set state updates the state but also initiates a re-render 

//<------->

Just JavaScript

<ul>
	{friends.map(function(name) {
		return (
			<li>
				{name}
			</li>
		)
	})}
</ul>

//<------->
React Router

<Router>
	<div>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/topics">Topics</Link></li>
		</ul>
			
		<Route exact path="y" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path path="/topics" component={Topics}/>


		</ul>
	</div>
</Router>
//<------->

Webpack 

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(_dirname, 'dist'),
		filename: 'index_bundle.js',
},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ['style-loader' , 'css-loader' ]}
		]	
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	]
};
//<------->
Babel

'babel': {
	'presets: [
		'env',
		'react'
	]
}

//<------->

Axios 

function getRepos (username) {
	return axios.get('linl' + username + 'link' + param + 'str');
}
