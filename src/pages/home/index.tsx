//this component is completely static and the type doesn't matter, so i use type any.

import { Swiper, SwiperSlide } from "swiper/react";
import "./home.scss";
import { bannerItems, gridItems2, gridItems1, swiperItems } from "./items";
import { Mousewheel, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import useResizeWindow from "../../hooks/useResizeWindow";
export default function Home() {
  return (
    <div className="home">
      {/* ---------------swiper banner component -----------------*/}
      <SwiperBanner />
      {/* ----------------cards component ------------------*/}
      <div className="home-content">
        <GridCards gridItems={gridItems1} />
        {/* ---------------swiper cards component ------------------*/}
        <SwiperCards title={"most popular items:"} swiperItems={swiperItems} />
        {/* ----------------cards component ------------------*/}
        <GridCards gridItems={gridItems2} />
      </div>
    </div>
  );
}
function GridCards({ gridItems }:{gridItems:any}) {
  return (
    <div className="cards">
      {gridItems.map((group: any) => {
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
              {group.items.map((item:any) => {
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

export function SwiperCards({
  title,
  swiperItems,
}: {
  title: string;
  swiperItems: any;
}) {
  const [isMobile, isTablet, isDesktop] = useResizeWindow();
  const [slidesPerView, setSlidesPerView] = useState<number>();

  useEffect(() => {
    isDesktop
      ? setSlidesPerView(4)
      : isTablet
      ? setSlidesPerView(2)
      : setSlidesPerView(1);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className="SwiperCards-container">
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{`${title}`}</p>
      <Swiper
        modules={[Navigation, Mousewheel]}
        spaceBetween={2}
        direction={"horizontal"}
        slidesPerView={slidesPerView}
        mousewheel={true}
        navigation={true}
        className="card-swiper"
      >
        {swiperItems.map((item: any) => {
          return (
            <SwiperSlide className="card-swiper-slide" key={item.id}>
              <img
                src={`${item.imgUrl || item.image}`}
                className="card-swiper-slide_img"
              />
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
