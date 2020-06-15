import React from "react";
import "./App.css";
import Logo from "./assets/img/logo.png";

import RssLine from "./assets/Icons/remixicon-icon/rss-line.svg";
import CustomerServiceLine from "./assets/Icons/remixicon-icon/customer-service-2-line.svg";
import MenuLine from "./assets/Icons/remixicon-icon/menu-line.svg";
import ShoppingBag from "./assets/Icons/remixicon-icon/shopping-bag-3-line.svg";
import NotificationLine from "./assets/Icons/remixicon-icon/notification-3-line.svg";
import UserLine from "./assets/Icons/remixicon-icon/user-line.svg";
import Mic from "./assets/Icons/mic-2-line.svg";
import ArrowDown from "./assets/Icons/remixicon-icon/arrow-down-s-line.svg";
import Banner from "./assets/Icons/Image 52.png";
import RibbonDown from "./assets/Icons/ribbon-down-left.svg";
import RibbonUp from "./assets/Icons/ribbon-top-right.svg";
import PrevArrow from "./assets/Icons/arrow-left-s-line-white.svg";
import NextArrow from "./assets/Icons/arrow-right-s-line-white.svg";
import Search from "./assets/Icons/loupe-for-cat.svg";
import GamePad from "./assets/Icons/remixicon-icon/gamepad-line.svg";
import ArrowUp from "./assets/Icons/remixicon-icon/arrow-up-line.svg";
import Cupon from "./assets/Icons/remixicon-icon/coupon-3-line.svg";
import Happy from "./assets/Icons/remixicon-icon/emotion-happy-line.svg";
import Zmall from "./assets/Icons/remixicon-icon/store-2-line.svg";
import Settings from "./assets/Icons/remixicon-icon/settings-line.svg";
import Digital from "./assets/Icons/remixicon-icon/microscope-line.svg";
import Img1 from "./assets/img/Image 28.png";
import Img2 from "./assets/img/Image 29.png";
import Img3 from "./assets/img/Image 65.png";
import Img4 from "./assets/img/26810607763486.png";

import WhiteShopCart from "./assets/Icons/shopping-white.svg";
import White1 from "./assets/Icons/coupon-3-line.svg";
import White2 from "./assets/Icons/coupon-line.svg";
import White3 from "./assets/Icons/gift-line.svg";
import White4 from "./assets/Icons/heart-2-line.svg";
import White5 from "./assets/Icons/history-line.svg";
import ArrowUp2 from "./assets/Icons/arrow-up-s-line.svg";
import Search2 from "./assets/Icons/search-2-line.svg";

function App() {
  const categoryContentData = [
    { title: "All Categories", img: require("./assets/Icons/dots-menu.svg") },
    {
      title: "Womens Categories",
      img: require("./assets/Icons/popular categories/dress.svg"),
    },
    {
      title: "Mens Fashions",
      img: require("./assets/Icons/popular categories/fashion (1).svg"),
    },
    {
      title: "Bay & Kids",
      img: require("./assets/Icons/popular categories/baby-clothes.svg"),
    },
    {
      title: "Electronics",
      img: require("./assets/Icons/popular categories/responsive (1).svg"),
    },
    {
      title: "Home & Furniture",
      img: require("./assets/Icons/popular categories/chair.svg"),
    },
    {
      title: "Tv & Appliances",
      img: require("./assets/Icons/popular categories/curved.svg"),
    },
    {
      title: "Smartphones",
      img: require("./assets/Icons/popular categories/vibrate.svg"),
    },
    {
      title: "Beauty & health",
      img: require("./assets/Icons/popular categories/shampoo.svg"),
    },
    {
      title: "Shoes",
      img: require("./assets/Icons/popular categories/high-heels.svg"),
    },
  ];

  return (
    <div className="landing-home">
      <section className="topbar sticky">
        <div className="container">
          <div className="row logo-row">
            <div className="col-12 logo-col">
              <img src={Logo} alt="logo" className="top-logo" />
            </div>
          </div>

          <div className="row">
            <div className="col-2 top-header-icon-section">
              <div>
                <img src={RssLine} alt="RssLine" className="icon" />
                <img
                  src={CustomerServiceLine}
                  alt="CustomerServiceLine"
                  className="icon  mx-5"
                />
                <img src={MenuLine} alt="MenuLine" className="icon" />
              </div>
            </div>

            {/* TODO: search field working here */}
            <div className="col-8">
              <div className="search_box">
                <div className="search_field">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="I'm looking for"
                  />
                  <img src={Mic} alt="Mic" className="mic-icon" />
                </div>
                <button type="button" class="btn btn-primary">
                  <img src={Search2} alt="Search2" className="search-icon-2" />
                </button>
              </div>
            </div>
            <div className="col-2 top-header-icon-section">
              <div style={{ marginLeft: 40 }}>
                <div className="item-count">
                  <span>2</span>
                </div>
                <img src={ShoppingBag} alt="ShoppingBag" className="icon" />
                <img
                  src={NotificationLine}
                  alt="NotificationLine"
                  className="icon mx-5"
                />
                <img src={UserLine} alt="UserLine" className="icon" />
              </div>
            </div>
          </div>

          <div className="row bootom-content-row">
            <div className="col-12 bottom-content">
              <div className="left-sub-content">
                <div className="category mr-2">
                  <p className="cursor-pointer">Categories</p>
                  <img src={ArrowDown} alt="ArrowDown" />
                </div>
                <div className="category">
                  <p className="cursor-pointer">Brands</p>
                  <img src={ArrowDown} alt="ArrowDown" />
                </div>

                <div className="vertical-line"></div>

                <div className="category">
                  <p className="cursor-pointer">Deals!</p>
                </div>
              </div>

              <div className="right-sub-content">
                <div className="category mr-5">
                  <p className="opacity-font cursor-pointer">Community</p>
                </div>
                <div className="category">
                  <p className="opacity-font cursor-pointer">Blog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row content-section-row">
            <div className="col-12">
              <img src={Banner} class="img-fluid mt-5" alt="Banner"></img>
            </div>

            <div className="col-12 mt-5 category-title">
              <p>Popular Categories</p>
              <span>Shop from hundread from categories</span>
            </div>

            <div className="col-12 mt-4">
              <img
                src={RibbonDown}
                alt="RibbonDown"
                className="ribbon-down-img"
              />
              <img src={RibbonUp} alt="RibbonUp" className="ribbon-up-img" />
              <div className="category-card">
                <div className="category-card-content">
                  {categoryContentData.map((data, index) => (
                    <div key={index} className="category-card-single-content">
                      <img src={data.img} alt="data-icon" />
                      <p className="pb-0 mt-4 text-center">{data.title}</p>
                    </div>
                  ))}
                </div>
                <div className="square-arrow"></div>
                <div className="arrow-section">
                  <div className="circle-next-arrow cursor-pointer">
                    <img
                      src={NextArrow}
                      alt="NextArrow"
                      className="next-arrow-icon"
                    />
                  </div>
                </div>

                <div className="category-search">
                  <input type="text" placeholder="Search for category" />
                  <img src={Search} alt="Search" className="search-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="row view-more-row">
            <div className="view-more">
              <p className="pb-0 cursor-pointer">View More</p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 shopping-content category-title">
              <p>Happy Shopping</p>
              <span>
                Enjoy uniqye online shopping experience that makes you smile
              </span>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={GamePad}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Game <br /> Land
                </p>
                <span>Play, Earn and Shop on Gameland</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={Cupon}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Offer <br /> Zone
                </p>
                <span>Stay tuned for special Offers & Deals</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={Happy}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Mighty <br /> Deals
                </p>
                <span>Get mighty deals beoyend limit</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={Zmall}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Z <br /> Mall
                </p>
                <span>For international brands lover</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={Settings}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Z <br /> Pay
                </p>
                <span>Bill payment and recharge</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="shopping-box-content">
                <img
                  src={Digital}
                  alt="GamePad"
                  className="shopping-box-content-img mb-2"
                />
                <p className="pb-0 mb-4">
                  Z <br /> Digital
                </p>
                <span>Enjoy your favourite digital service</span>
                <div>
                  <img src={ArrowUp} alt="ArrowUp" className="arrow-up" />
                </div>
              </div>
            </div>
          </div>

          <div className="row hot-deal-row">
            <div className="col-12 hot-deal-content category-title">
              <p>Hot Deals</p>

              <div className="hot-deal-view-more">
                <p className="mr-4 cursor-pointer">View More</p>

                <div className="hot-prev-square-arrow"></div>
                <div className="hot-deal-circle-next-arrow mr-4 cursor-pointer">
                  <img
                    src={PrevArrow}
                    alt="PrevArrow"
                    className="hot-prev-arrow-icon"
                  />
                </div>

                <div className="hot-square-arrow"></div>
                <div className="hot-deal-circle-next-arrow cursor-pointer">
                  <img
                    src={NextArrow}
                    alt="NextArrow"
                    className="hot-next-arrow-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-3 bottom-image cursor-pointer">
              <figure class="figure">
                <img
                  src={Img1}
                  class="figure-img img-fluid rounded"
                  alt="Img1"
                />
              </figure>
            </div>
            <div className="col-3 cursor-pointer">
              <figure class="figure">
                <img
                  src={Img2}
                  class="figure-img img-fluid rounded"
                  alt="Img2"
                />
              </figure>
            </div>
            <div className="col-3 cursor-pointer">
              <figure class="figure">
                <img
                  src={Img3}
                  class="figure-img img-fluid rounded"
                  alt="Img3"
                />
              </figure>
            </div>
            <div className="col-3 cursor-pointer">
              <figure class="figure">
                <img
                  src={Img4}
                  class="figure-img img-fluid rounded"
                  alt="Img4"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <div className="right-sidebar-icon">
        <div className="top-icon">
          <div className="count mb-3">
            <span>2</span>
          </div>
          <img src={WhiteShopCart} alt="WhiteShopCart" className="side-icon" />
        </div>
        <hr />
        <div className="middle-icon">
          <img src={White1} alt="White1" className="side-icon" />
          <img src={White2} alt="White2" className="side-icon my-3" />
          <img src={White3} alt="White3" className="side-icon" />
        </div>
        <hr />
        <div className="bottom-icon">
          <img src={White5} alt="White5" className="side-icon mb-3" />
          <img src={White4} alt="White4" className="side-icon" />
        </div>
      </div>

      <div className="scroll-icon cursor-pointer">
        <img src={ArrowUp2} alt="ArrowUp2" className="scroll-arrow-icon" />
      </div>
    </div>
  );
}

export default App;
