'use strict'

const testData = [{
  "login": "josellausas",
  "id": 4162671,
  "node_id": "MDQ6VXNlcjQxNjI2NzE=",
  "avatar_url": "https://avatars2.githubusercontent.com/u/4162671?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/josellausas",
  "html_url": "https://github.com/josellausas",
  "followers_url": "https://api.github.com/users/josellausas/followers",
  "following_url": "https://api.github.com/users/josellausas/following{/other_user}",
  "gists_url": "https://api.github.com/users/josellausas/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/josellausas/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/josellausas/subscriptions",
  "organizations_url": "https://api.github.com/users/josellausas/orgs",
  "repos_url": "https://api.github.com/users/josellausas/repos",
  "events_url": "https://api.github.com/users/josellausas/events{/privacy}",
  "received_events_url": "https://api.github.com/users/josellausas/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jose",
  "company": "@codersmexico ",
  "blog": "",
  "location": "Home",
  "email": null,
  "hireable": true,
  "bio": "Coding at home",
  "twitter_username": null,
  "public_repos": 79,
  "public_gists": 22,
  "followers": 19,
  "following": 44,
  "created_at": "2013-04-15T16:23:46Z",
  "updated_at": "2020-05-27T17:20:42Z"
},]


class Card extends React.Component {
  render() {
    const { name, username, repos_url, avatar_url } = this.props;
    return (
      <div className="card">
        <img src={avatar_url} ></img>
        <p>{name}</p>
        <p>{username}</p>
        <a href={repos_url}><p>{'Repos'}</p></a>
      </div>
    )
  }
}

class ProfileForm extends React.Component {
  state={
    options: '',
  }
  textInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault();
    alert(this.textInput.current.value);
    const response =  await axios.get('https://api.github.com/users/josellausas')
    this.props.addProfile(response.data);
    this.setState({ options: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Github username" ref={this.textInput} required></input>
          <input
            type="text"
            placeholder="Options"
            onChange={ e => this.setState({options: e.target.value})}
            value={this.state.options} 
            required />
          <button>Add to list</button>
        </form>
      </div>
    )
  }
}

class CardList extends React.Component {
  render() {
    const {profiles} = this.props;
    return (
      <div>
        { profiles.map( profile => <Card key={profile.id} {...profile} />)}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  }

  handleClick = (event) => {
    alert("Hello there");
  }

  addProfile = (profile) => {
    this.setState( prevState => ({
      profiles: [...prevState.profiles, profile]
    }));
  }

  render() {
    const {userid} = this.props;
    const {profiles} = this.state;
    return (
    <div style={{ margin: '1rem' }}>
      <h1><span onClick={this.handleClick}>Hello {userid}</span></h1>
      <ProfileForm addProfile={this.addProfile}/>
      <CardList profiles={profiles} />
    </div>
    );
  }
}

const containers = document.querySelectorAll(".app");
containers.forEach(domContainer => {
  const userid = domContainer.dataset.userid;
  ReactDOM.render(
    React.createElement(App, {userid: userid}),
    domContainer
  );
});

const styles = React.St


