import React, { Component } from "react";
import "./Register.css";

import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login = () => {
    this.props.history.push("/home");
  };
  register = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <body>
        <div>
          <div className="content">
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              placeholder="Email..."
            />
            <input
              onChange={(event) => {
                this.setState({
                  username: event.target.value,
                });
              }}
              className="input"
              type="text"
              id="p"
              name="password"
              placeholder="password..."
            />
            <input
              className="input"
              onChange={(event) => {
                this.setState({
                  password: event.target.value,
                });
              }}
              type="text"
              id="password"
              name="password"
              placeholder="confirm password..."
            />

            <button
              className="button register"
              onClick={() => {
                axios({
                  method: "post",
                  url: `${process.env.REACT_APP_SERVER_URL}/users`,
                  data: {
                    username: this.state.username,
                    password: this.state.password,
                  },
                }).then((res) => {
                  this.props.createUser(res.data.username, res.data.id);

                  this.props.history.push("/home");
                });
              }}

              // onClick={() => {
              //   this.setState({
              //     showPopup: true,
              // });

              // }}
            >
              register
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default Register;
