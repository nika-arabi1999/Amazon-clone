import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProductsQuery } from "../../../../services/dashboardApi";
import { SwiperCards } from "../../../home";
import { swiperItems } from "../../../home/items";

import { ProductCard } from "../../../products";
import { Mousewheel, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
// import
function ProductRelated() {
  return (
    <div>
      <h3
        style={{ textAlign: "start", paddingLeft: "10px", fontSize: "2.2rem" }}
      >
        people also bought :
      </h3>
      <SwiperRelatedItems />
    </div>
  );
}

export function SwiperRelatedItems() {
  const { data } = useGetProductsQuery();
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  function getSlidesPerView() {
    return window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={2}
        direction={"horizontal"}
        slidesPerView={slidesPerView}
        mousewheel={true}
        navigation={true}
        className="card-swiper"
      >
        {data?.data.map((product, index) => {
          return (
            <SwiperSlide style={{ fontSize: "1.6rem" }}>
              <ProductCard product={product} key={index} />
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default ProductRelated;
