import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser('bradtraversy');
    console.log(this.props.user);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return (
      <div>
        {name} {bio}
      </div>
    );
  }
}

export default User;
