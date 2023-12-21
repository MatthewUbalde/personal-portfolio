function Thumbnail({ title, imgPath, altImg, link }: ThumbnailData) {
  return (
    <div className="thumbnail-container">
      <a href={link} className="thumbnail" rel="noopener" target="_blank">
        <img src={imgPath} alt={altImg} />
      </a>
      {title && <h4>{title}</h4>}
    </div>
  );
}

export default Thumbnail;
