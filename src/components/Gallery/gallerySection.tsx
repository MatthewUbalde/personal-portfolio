import { ReactNode } from "react";
import Thumbnail from "./Thumbnail/thumbnail";
import "./gallerySection.css";

interface Props {
  id?: string;
  children?: ReactNode;
  thumbnails: Array<ThumbnailData>;
  thumbnailType?: 'auto' | 'display' | 'logo';
}

function GallerySection({id, children, thumbnails, thumbnailType}: Props) {

  if (thumbnails.length == 0)
  {
    return (
      <section id={id} className="gallery">
        {children}
      </section>
    )
  }

  return (
    <section id={id} className={"gallery thumbnail-" + thumbnailType}>
      {children}
      {thumbnails.map((items, index) => (
        <Thumbnail
          title={items.title}
          imgPath={items.imgPath}
          altImg={items.altImg}
          link={items.link}
          key={index.toString()}
        />
      ))}
    </section>
  );
}

export default GallerySection;
