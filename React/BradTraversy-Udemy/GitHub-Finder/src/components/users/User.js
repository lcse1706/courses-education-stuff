import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    // stuck when trying to display route. New version of react, dont let to pass props threw render. Video: Single User Component & Data

    this.props.getUser(this.props.match.params.login);
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

    return <div>{name}</div>;
  }
}

export default User;
