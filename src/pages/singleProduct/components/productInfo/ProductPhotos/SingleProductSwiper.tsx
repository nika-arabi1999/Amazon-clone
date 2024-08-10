import ImageGallery from "react-image-gallery";
import { product } from "../../../product"; 
//style
import "react-image-gallery/styles/scss/image-gallery.scss";

function SingleProductSwiper() {
  const productsWithOriginal = product.assets.map((image) => ({
    original: image.url,
    thumbnail: image.url,
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
