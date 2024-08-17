import "./cart.scss";

import { cartItems } from "../home/items";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import useResizeWindow from "../../hooks/useResizeWindow";
import { SingleCartRelated } from "./CartRelated";

function CartRecent() {
  const [isMobile, isTablet, isDesktop]: boolean[] = useResizeWindow();
  return (
    <div className="cart-part cart-recent">
      {/* <SwiperCards title="also bought" swiperItems={cartItems}/> */}
      <div className="SwiperCards-container" style={{ width: "100%" }}>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>your recent views</p>
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={0}
          direction={"horizontal"}
          slidesPerView={isMobile ? 2.5 : isTablet ? 3.75 : 6.5} 
          mousewheel={true}
          navigation={true}
          className="card-swiper"
        >
          {cartItems.map((item) => {
            return (
              <SwiperSlide className="card-swiper-slide" key={item.id}>
                <SingleCartRelated item={item} midClass="recent" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}




export default CartRecent;
