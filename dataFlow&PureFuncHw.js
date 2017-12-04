var react = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name} </h1>
        <h3>username:{this.props.username} </h3>
      </div>
    )
  }
}

Badge.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
}

ReactDOM.render(
  <Badge 
    name='Tyler McGinnis'
    username='tylermcginnis'
    img={'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'}/>,
  document.getElementById('app')
);

//------
 var USER_DATA = {
  name: 'Tyler McGinnis',
  img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
  username: 'tylermcginnis'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name:{this.props.user.name} </h1>
        <h3>username:{this.props.user.username} </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
//-----

EDIT ON
 class Avatar extends React.Component {
  render() {
    return (
      <img src={this.props.img} />
    )
  }
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name} </h1>
    )
  }
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username} </h3>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img }/>
        <Label name={this.props.user.name }/>
        <ScreenName username={this.props.user.username}/>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
);

//-----map % filter

class Users extends React.Component {
  render() {
    return (
      <ul>
        {this.props.list.map(function(name){
						return <li>{name}</li>
					}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Tyler', 'Mikenzi', 'Ryan', 'Michael']} />,
  document.getElementById('app')
);

//--
class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {this.props.list.filter(function(user){
						return user.friend === true
					}).map(function (user) {
						return <li>{user.name}</li>
					})} 
        </ul>
        
        <hr />
        
        <h1> Non Friends </h1>
        <ul>
          {this.props.list.filter(function(user){
						return user.friend !== true
					}).map(function (user) {
						return <li>{user.name}</li>
					})} 
        </ul>        
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);

