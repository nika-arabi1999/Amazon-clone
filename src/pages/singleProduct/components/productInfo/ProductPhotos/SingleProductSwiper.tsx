import ImageGallery from "react-image-gallery";

//style
import "react-image-gallery/styles/scss/image-gallery.scss";
import { useContext } from "react";
import { ProductContext } from "../../..";

function SingleProductSwiper({product}) {
 

  const productsWithOriginal = product.image.map((image) => ({
    original: image.source,
    thumbnail: image.source,
  }));
  return (
    <ImageGallery
      items={productsWithOriginal}
      original="url"
      thumbnail="url"
      originalHeight="200px"
      originalWidth="200px"
      loading="lazy"
      showPlayButton={true}
      showFullscreenButton={true}
      slideInterval={1000}
      slideOnThumbnailOver={true}
      showIndex={true}
      className="product-gallery"
    />
  );
}

export default SingleProductSwiper;
