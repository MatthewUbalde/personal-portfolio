import { ReactNode } from "react";
import Thumbnail from "./Thumbnail/thumbnail";
import "./gallerySection.css";

interface Props {
  id?: string;
  children?: ReactNode;
  thumbnails: Array<ThumbnailData>;
}

function GallerySection({id, children, thumbnails }: Props) {
  return (
    <section id={id} className="gallery">
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
