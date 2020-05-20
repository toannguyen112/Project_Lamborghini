import React, { Component } from "react";
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../component/Footer/Footer";
import Like from "../component/Like/Like";
export default class ProductDetailPage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
  render() {
    return (
      <div className="warpperBodyRigth">
        <Breadcrumb title={"Accessories"} />
        <div className="wrapperDetail">
          <div className="container">
            <div className="row">
              <div className="col-md-3  col-sm-12">
                <div className="wrapperDetail--left">
                  <div className="wrap">
                    The Automobili-Lamborghini wallet is a practical stylish
                    accessory. Crafted from leather, it has been embellished
                    with iconic detailing, such as the hexagonal quilting, the
                    ...{" "}
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
                  <OwlCarousel className="owl-theme" loop items={1}  nav >
                    <img
                      src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9012861yyu205_01b.jpg"
                      alt=""
                      className="productImg img-fluid "
                    />
                    <img
                      src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9012861yyb065_02.jpg"
                      alt=""
                      className="productImg img-fluid "
                    />
                    <img src="https://static.lamborghinistore.com/media/catalog/product/cache/1/image/800x1074/9df78eab33525d08d6e5fb8d27136e95/9/0/9012861yyb065_05.jpg"  alt=""
                      className="productImg img-fluid "/>
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-md-3  col-sm-12">
                <div className="wrapperDetail--right">
                  <div className="wrap-content">
                    <div className="name">AUTOMOBILI LAMBORGHINI WAVE TENJIN 4 RUNNING SHOES BY MIZUNO</div>
                    <div className="code">Code: 9009562SSB000</div>
                    <p className="price">€ 98.00</p>
                    <p className="legal-disclaimer">
                      (Tax incl., shipping cost excl.)
                    </p>

                    <div className="chooseColor">
                      <div className="color">COLOR</div>
                      <div className="form-check form-check-inline">
                        <img
                          src="https://static.lamborghinistore.com/media//catalog/product/cache/attribute-options/images/25x25/1455-1011-1011-black.png"
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

                    <div class="form-group">
                      <label for="">SIZE</label>
                      <select class="custom-select" name="" id="">
                        <option selected>SELECT SIZE</option>
                        <option value="">M</option>
                        <option value="">XL</option>
                        <option value="">XXX</option>
                      </select>
                    </div>
                    <button className="addToCart">Add to cart</button>
                    <div className="warp_addWish">
                      <p className="addWish">Add to wishlist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Like/>
        <Footer/>
      </div>
    );
  }
}
