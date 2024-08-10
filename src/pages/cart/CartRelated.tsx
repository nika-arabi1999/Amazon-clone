import "./cart.scss";

import { cartItems } from "../home/items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

function CartRelated() {
  return (
    <div className="cart-part cart-related">
      {/* <SwiperCards title="also bought" swiperItems={cartItems}/> */}
      <div className="SwiperCards-container" style={{ width: "100%" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          related to your cart items
        </p>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={2}
          direction={"horizontal"}
          slidesPerView={2.5}
          mousewheel={true}
          navigation={true}
          className="card-swiper"
        >
          {cartItems.map((item) => {
            return (
              <SwiperSlide className="card-swiper-slide" key={item.id}>
                <SingleCartRelated item={item} midClass="related"/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
function CartRelatedDesktop() {
  return (
    <div className="cart-part cart-related">
      <div className="SwiperCards-container" style={{ width: "100%" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          related to your cart items
        </p>
        <ul className="cart-related-list">
          {cartItems.map((item) => {
            return <SingleCartRelated item={item} midClass="related" />;
          })}
        </ul>
      </div>
    </div>
  );
}

function SingleCartRelated({ item, midClass }: { item: any, midClass: string}) {
  return (
    <div className={`cart-${midClass}-single`}>
      <div className="single_image">
        <img src={`${item.image}`} />
      </div>
      <div className="single_details">
        <a className="single_details_name">{item.name}</a>
        <div className="single_details_stars">
          {" "}
          &#9733;&#9733;&#9733;&#9734;&#9734;
        </div>
        <div className="single_details_price">
          $<strong>{item.price}</strong>
        </div>
        <div className="single_details_btn">
          <button className="CardBtn single_details_btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export { CartRelated, CartRelatedDesktop,SingleCartRelated };
