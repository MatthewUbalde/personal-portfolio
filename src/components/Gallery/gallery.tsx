import { ReactNode } from "react";
import Thumbnail from "./Thumbnail/thumbnail";
import "./gallery.css";

interface Props {
  id?: string;
  children?: ReactNode;
  src?: Array<ThumbnailData>;
  type?: 'auto' | 'display' | 'logo';
}

function Gallery({id, children, src, type}: Props) {
  return src && (
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

export default Gallery;
