import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./home.scss";
import { bannerItems, gridItems2, gridItems1, swiperItems } from "./items";
import { Mousewheel, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div className="home">
      {/* ---------------swiper banner component -----------------*/}
      <SwiperBanner />
      {/* ----------------cards component ------------------*/}
      <div className="home-content">
        <GridCards gridItems={gridItems1} />
        {/* ---------------swiper cards component ------------------*/}
        <SwiperCards />
        {/* ----------------cards component ------------------*/}
        <GridCards gridItems={gridItems2} />
      </div>
    </div>
  );
}
function GridCards({ gridItems }) {
  return (
    <div className="cards">
      {gridItems.map((group) => {
        return (
          <div
            className={`${
              group.items.length === 1 ? "sub-card sub-card-single" : "sub-card"
            }`}
          >
            <div className="sub-card__title">{`${group.groupTitle}`}</div>

            <div
              className={`${
                group.items.length === 1
                  ? "sub-card-single__flex"
                  : "sub-card__grid"
              }`}
            >
              {group.items.map((item) => {
                return (
                  <div className="grid-item" key={item.id}>
                    <img src={`${item.imgUrl}`} className="grid-item__image" />
                    <p className="grid-item__text">{`${item.text}`}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SwiperCards() {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  function getSlidesPerView() {
    return window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
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

  // console.log(window.innerWidth);

  return (
    <div className="SwiperCards-container">
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        most popular items:
      </p>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={2}
        direction={"horizontal"}
        slidesPerView={slidesPerView}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        className="card-swiper"
      >
        {swiperItems.map((item) => {
          return (
            <SwiperSlide className="card-swiper-slide" key={item.id}>
              <img src={`${item.imgUrl}`} className="card-swiper-slide_img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

function SwiperBanner() {
  const [device, setDevice] = useState(getDevice());

  function getDevice() {
    return window.innerWidth >= 600 ? "desktop" : "mobile";
  }
  useEffect(() => {
    const handleDevice = () => {
      setDevice(getDevice());
    };
    window.addEventListener("resize", handleDevice);
    return () => {
      window.removeEventListener("resize", handleDevice);
    };
  }, []);
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        className="banner_swiper"
      >
        {bannerItems.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <a href="#" className="banner_link">
                <img
                  src={
                    device === "desktop"
                      ? `${item.imgUrl}`
                      : `${item.imgUrlMobile}`
                  }
                  alt="banner"
                  className="banner_card"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
