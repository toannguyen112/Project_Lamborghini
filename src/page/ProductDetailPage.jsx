import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import Footer from "../component/Footer/Footer";
import BestSellerContainer from "../container/BestSellerContainer";
import * as action from "../Store/Action/action";
import { connect } from "react-redux";

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let { productList } = this.props;
    let id = parseInt(this.props.match.params.id);

    const thisItem = productList.find((pro) => pro.id === id);
    console.log(thisItem);

    this.setState({
      product: thisItem,
    });
  }

  render() {
    let { product } = this.state;
    console.log(product.image);

    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={product.name} />
        <div className="wrapperDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-3  col-sm-12">
                <div className="wrapperDetail--left">
                  <div className="wrap">
                    {product.des}
                    <span className="textBold">
                      Read more about the product
                      <div className="socialIcon">
                        <i className=" social--icon fab fa-facebook-f"></i>
                        <i
                          className="
                                                   social--icon fab fa-twitter"
                        ></i>
                        <i
                          className="
                                                    social--icon fab fa-pinterest"
                        ></i>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-sm-12">
                <div className="wrapperDetail--center">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={product.image}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9012861yyb065_02.jpg"
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product.image}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleFade"
                      role="button"
                      data-slide="prev"
                    >
                      <i
                        className="fa fa-angle-left"
                        style={{ color: "#000" }}
                      />

                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleFade"
                      role="button"
                      data-slide="next"
                    >
                      <i
                        className="fa fa-chevron-right"
                        style={{ color: "#000" }}
                      />

                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3  col-sm-12">
                <div className="wrapperDetail--right">
                  <div className="wrap-content">
                    <div className="name">
                      AUTOMOBILI LAMBORGHINI WAVE TENJIN 4 RUNNING SHOES BY
                      MIZUNO
                    </div>
                    <div className="code">Code: 9009562SSB000</div>
                    <p className="price"> {product.price} </p>
                    <p className="legal-disclaimer">
                      (Tax incl., shipping cost excl.)
                    </p>

                    <div className="chooseColor">
                      <div className="color">COLOR</div>
                      <div className="form-check form-check-inline">
                        <img
                          src={product}
                          alt=""
                          className=" imgChoose active"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        ></label>
                      </div>
                      <div className="form-check form-check-inline">
                        <img
                          src="https://static.lamborghinistore.com/media//catalog/product/cache/attribute-options/images/25x25/2120-LMB-1675_2.png"
                          alt=""
                          className=" imgChoose "
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        ></label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>SIZE</label>
                      <select className="custom-select" name id value>
                        <option value>SELECT SIZE</option>
                        <option value>M</option>
                        <option value>XL</option>
                        <option value>XXX</option>
                      </select>
                    </div>

                    <button
                      className="addToCart"
                      onClick={() => this.props.addToCart(product)}
                    >
                      Add to cart
                    </button>
                    <div className="warp_addWish">
                      <p className="addWish">Add to wishlist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BestSellerContainer
          history={this.props.history}
          productType={"bestSeller"}
          title="YOU MAY ALSO LIKE"
        />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  productList: state.Products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(action.addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
