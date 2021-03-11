import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    var beaniesInCart = this.props.cart.map((beanieId) => {
      return this.props.beanies.find((beanie, index) => {
        return beanieId === beanie.id;
      });
    });
    // for (let index = 0; index < this.props.cart.length; index++) {
    //   const beanieId = this.props.cart[index];
    //   console.log(beanieId);

    //   var foundBeanie = this.props.beanies.find((beanie, index) => {
    //     return beanieId === beanie.id;
    //   });
    //   console.log("foundbeanie", foundBeanie);
    // }

    return (
      <div className="wrapper">
        {beaniesInCart.map((beanie) => {
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

                  <span className="extra-info">A little column extra info</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.beanies.cart,
    beanies: state.beanies.beanies,
  };
}

export default connect(mapStateToProps)(Cart);
