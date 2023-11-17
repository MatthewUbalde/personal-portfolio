import { ReactNode } from "react";
import Thumbnail from "./Thumbnail/thumbnail";
import "./gallerySection.css";

interface Props {
  id?: string;
  children?: ReactNode;
  src?: Array<ThumbnailData>;
  type?: 'auto' | 'display' | 'logo';
}

function GallerySection({id, children, src, type}: Props) {

  if (!src)
  {
    return (
      <div id={id} className="gallery">
        {children}
      </div>
    )
  }

  return (
    <div id={id} className={"gallery gallery-" + type}>
      {children}
      {src.map((items, index) => (
        <Thumbnail
          title={items.title}
          imgPath={items.imgPath}
          altImg={items.altImg}
          link={items.link}
          key={index.toString()}
        />
      ))}
    </div>
  );
}

export default GallerySection;
