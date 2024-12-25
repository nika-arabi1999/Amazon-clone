import ImageGallery from "react-image-gallery";

//style
import "react-image-gallery/styles/scss/image-gallery.scss";
import { product } from "../../../../../services/types";
function SingleProductSwiper({ product }: { product: product }) {
  const productsWithOriginal = product.image.map((image) => ({
    original: image.source,
    thumbnail: image.source,
    originalHeight: 400,
  }));
  return (
    <ImageGallery
      items={productsWithOriginal}
      showPlayButton={true}
      showFullscreenButton={true}
      slideInterval={1000}
      slideOnThumbnailOver={true}
      showIndex={true}
      additionalClass="image-gallery"
    />
  );
}

export default SingleProductSwiper;
