import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div>
            <ul class="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/">Main</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="/squat">Squat</Link>
              </li>
              <li activeClassName="active">
                <Link to="/bench">Bench</Link>
              </li>
              <li activeClassName="active">
                <Link to="/deadlift">Deadlift</Link>
              </li>
              <li activeClassName="active">
                <Link to="/row">Row</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
