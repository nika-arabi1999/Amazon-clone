import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { ProductCard } from "../../../products";
import { product } from "../../../../services/types";

// import
function ProductRelated({ relatedProducts }: { relatedProducts: product[] }) {
  return (
    <div>
      <h3
        style={{ textAlign: "start", paddingLeft: "10px", fontSize: "2.2rem" }}
      >
        people also bought :
      </h3>
      <SwiperRelatedItems relatedProducts={relatedProducts} />
    </div>
  );
}

export function SwiperRelatedItems({ relatedProducts }: { relatedProducts: product[] }) {
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
    <div>
      {relatedProducts ? (
        <Swiper
          modules={[Navigation, Mousewheel]}
          spaceBetween={10}
          direction={"horizontal"}
          slidesPerView={slidesPerView}
          mousewheel={true}
          navigation={true}
          // className="card-swiper"
          height={400}
        >
          {relatedProducts?.map((product, index) => {
            return (
              <SwiperSlide style={{ fontSize: "1.6rem" }} key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductRelated;
