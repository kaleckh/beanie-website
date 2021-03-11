import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBeanieToCart } from "./reducers/beanieActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
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
          {this.props.example2.beanies.map((beanie, index) => {
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
                    this.props.addBeanieToCart(beanie.id);
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
    example: state.cart,
  };
}
const mapDispatchToProps = {
  addBeanieToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
