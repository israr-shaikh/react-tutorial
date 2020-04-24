import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Fourth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { history } = this.props;
    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={() => history.push("/second")}>Second</button>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/third">
                Third
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ backgroundColor: "red" }}>Fourth accessed from first</div>
      </div>
    );
  }
}

export default withRouter(Fourth);
