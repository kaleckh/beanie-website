import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "./reducers/beanieActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      beanies: [
        {
          price: "15",
          color: "red",
          size: "medium",
          id: 2,
        },
        {
          price: "15",
          color: "red",
          size: "large",
          id: 3,
        },
        {
          price: "20",
          color: "yellow",
          size: "medium",
          id: 4,
        },
        {
          price: "25",
          color: "orange",
          size: "small",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="cart">
            <button
              className="button"
              onClick={() => {
                this.props.history.push("/cart");
              }}
            >
              View cart
            </button>
            <button className="button">crewnecks</button>
            <button className="button">tees</button>
            <button className="button">beanies</button>
          </div>
          <div className="login">
            <button
              className="button"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              login
            </button>
            <button
              className="button"
              onClick={() => {
                this.props.history.push("/cart");
              }}
            >
              register
            </button>
          </div>
        </header>
        <div className="wrapper">
          {this.state.beanies.map((beanie, index) => {
            return (
              <div className="beanie">
                <img
                  src="https://media.tractorsupply.com/is/image/TractorSupplyCompany/1064243?$456$"
                  alt="carhartt beanie"
                  width="200"
                  height="200"
                />
                <div>Description</div>
                <div>size: {beanie.size}</div>
                <div>price: ${beanie.price}</div>

                <button
                  onClick={() => {
                    var cart = this.props.example
                    this.props.example.push(beanie.id);
                    this.setState(
                      {
                        cart,
                      },
                      () => {
                        console.log(this.props.example);
                      }
                    );
                  }}
                >
                  add to cart
                </button>

                <link
                  rel="stylesheet"
                  href="https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
                />
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
                />
                <div className="col-md-12">
                  <div className="info">
                    <i className="icon-info-sign"></i>

                    <span className="extra-info">
                      A little column extra info
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    example2: state.beanies,
    example: state.cart
  };
}
const mapDispatchToProps = {
  updateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

