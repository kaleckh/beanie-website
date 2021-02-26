import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../reducers/beanieActions";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.example}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    example: state.cart,
  };
}
const mapDispatchToProps = {
  updateCart,
  
};


export default connect(mapStateToProps)(Cart);
