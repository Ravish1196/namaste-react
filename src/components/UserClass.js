import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name+"Constructor")

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name+"component did mount");
    const data = await fetch("https://api.github.com/users/Ravish1196");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate(){
    console.log(this.props.name+"Component did update");
  }

  componentWillUnmount(){
    console.log(this.props.name+"component will unmount");
  }

  render() {
    console.log(this.props.name+"render")
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="avatar_url" src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location {location}</h3>
        <h4>Contact: @ravish1996</h4>
      </div>
    );
  }
}

export default UserClass;
