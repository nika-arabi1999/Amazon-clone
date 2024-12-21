import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

import CardBtn from "../../components/common/btn/CardBtn";
import { product } from "../../services/types";

function CartRelated({
  relatedItems,
  addToCartHandler,
}: {
  relatedItems: product[];
  addToCartHandler: any;
}) {
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
          {relatedItems.map((item) => {
            return (
              <SwiperSlide className="card-swiper-slide" key={item.id}>
                <SingleCartRelated
                  item={item}
                  midClass="related"
                  addToCartHandler={addToCartHandler}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
function CartRelatedDesktop({
  relatedItems,
  addToCartHandler,
}: {
  relatedItems: product[];
  addToCartHandler: any;
}) {
  return (
    <div className="cart-part cart-related">
      <div className="SwiperCards-container" style={{ width: "100%" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          related to your cart items
        </p>
        <ul className="cart-related-list">
          {relatedItems.map((item) => {
            return (
              <SingleCartRelated
                item={item}
                midClass="related"
                addToCartHandler={addToCartHandler}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function SingleCartRelated({
  item,
  midClass,
  addToCartHandler,
}: {
  item: any;
  midClass: string;
  addToCartHandler: any;
}) {
  return (
    <div className={`cart-${midClass}-single`}>
      <div className="single_image">
        <img src={`${item.image[0].source}`} />
      </div>
      <div className="single_details">
        <a className="single_details_name">{item.name}</a>
        <div className="single_details_stars">
          {" "}
          &#9733;&#9733;&#9733;&#9734;&#9734;
        </div>
        <div className="single_details_price">
          $<strong>{item.price.raw}</strong>
        </div>
        <CardBtn
          className="CardBtn primary"
          style={{ fontSize: "1.5rem", width: "100%" }}
          onClick={() => addToCartHandler({ id: item.id, quantity: 1 })}
        >
          Add To Cart
        </CardBtn>
      </div>
    </div>
  );
}

export { CartRelated, CartRelatedDesktop, SingleCartRelated };
